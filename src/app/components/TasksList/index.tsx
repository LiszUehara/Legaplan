"use client"

import { useEffect, useState } from 'react';
import './style.scss' 
import Modal from '../Modal';
import { useDisclosure } from '@/utils/hooks';
import InputWithLabel from '../Input';
import Task from '../Task';
import { v4 as uuidv4 } from 'uuid';

const TasksList = () => {
    const [tasks, setTasks] = useState<{text: string; done: boolean, id: string}[]>([]);
    const [newTask, setNewTask] = useState('');
    const modalNewTask = useDisclosure(false)
    const modalDeleteTask = useDisclosure(false)
    const [taskToDelete, setTaskToDelete] = useState<{text: string; done: boolean, id: string}>();

    const handleSave = () => {
        const newArrayTasks =[...tasks, {text: newTask, done: false, id: uuidv4()}]
        localStorage.setItem('tasksFocal', JSON.stringify(newArrayTasks))
        setTasks(newArrayTasks);
        modalNewTask.close();
    }
    const toggleTask = (id: string) =>{
        const newTasks = [...tasks]
        const index = newTasks.findIndex(task=> task.id == id)
        newTasks[index] = { ...newTasks[index], done: !newTasks[index].done}
        setTasks(newTasks)
        localStorage.setItem('tasksFocal', JSON.stringify(newTasks))

    }
    const getTaskUncheck= ()=> {
        return tasks.filter(task=>!task.done)
    }
    const getTaskCheck= ()=> {
        return tasks.filter(task=>task.done)
    }

    const handleDelete = () => {
        if(taskToDelete){
            setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
        }
        modalDeleteTask.close();
    };

    useEffect(()=> {
        const tasksMemory = localStorage.getItem('tasksFocal')
        if(tasksMemory){
            setTasks(JSON.parse(tasksMemory))
        }
    }, [])
    useEffect(()=> {
        if(!modalNewTask.isOpen){
            setNewTask('')
        }
    }, [modalNewTask.isOpen])
    return (
        <section>
            {!!tasks.length && (
                <div className="containerTask">
                    {!!getTaskUncheck().length && (
                        <>
                            <div className="titleTaskList">Suas tarefas de hoje</div>
                            {getTaskUncheck().map((task)=>{
                                return (
                                    <Task
                                        key={task.text}
                                        {...task}
                                        setDone={()=>toggleTask(task.id)}
                                        onDelete={()=>{
                                            setTaskToDelete(task)
                                            modalDeleteTask.open()
                                        }}
                                    />                            
                                )
                            })}
                        </>
                    )}
                    {!!getTaskCheck().length && (
                        <>
                            <div className="titleTaskList">Tarefas finalizadas</div>
                            {getTaskCheck().map((task, index)=>{
                                return (
                                    <Task
                                        key={task.text}
                                        {...task}
                                        setDone={()=>toggleTask(task.id)}
                                        onDelete={()=>{
                                            setTaskToDelete(task)
                                            modalDeleteTask.open()
                                        }}
                                    />                            
                                )
                            })}
                        </>
                    )}
                </div>
            )}
            <button onClick={modalNewTask.open}>Adicionar nova tarefa</button>
            <Modal
                isOpen={modalNewTask.isOpen}
                title={"Nova tarefa"}
            >
                <div className="modalNewTask">
                    <div className="inputs">
                        <InputWithLabel
                            label='Título'
                            placeholder='Digite'
                            value={newTask}
                            onChange={(e)=>setNewTask(e.target.value)}
                        />
                    </div>
                    <div className="containerButton">
                        <button className="cancel" onClick={modalNewTask.close}>Cancelar</button>
                        <button onClick={handleSave}>Adicionar</button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalDeleteTask.isOpen}
                title={"Deletar tarefa"}
            >
                <div className="modalDeleteTask">

                    <p>Tem certeza que você deseja deletar essa tarefa?</p>
                </div>
                <div className="containerButton">
                    <button className='cancel' onClick={modalDeleteTask.close}>Cancelar</button>
                    <button className='delete' onClick={handleDelete}>Deletar</button>
                </div>
            </Modal>
        </section>
    );
};

export default TasksList;