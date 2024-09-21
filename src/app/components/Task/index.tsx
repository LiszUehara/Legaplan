import Image from "next/image";
import "./styles.scss";

interface ITask {
    text: string;
    done: boolean;
    setDone: ()=>void;
    onDelete: ()=>void;
}
function Task({text, done, setDone, onDelete}:ITask){
    return (
        <div className="task">
            <div className="taskContent">
                <Image src={done ? '/CheckboxDone.png' : '/Checkbox.png'}  width={24} height={24} alt="ckeck" onClick={setDone}/>
                <span className={done ? 'checkText' : ''}>
                    {text}
                </span>
            </div>
            <Image
                src={'/trash.png'}
                alt="Lixeira"
                width={24}
                height={24}
                className="trash"
                onClick={onDelete}
            />
        </div>
    )
}

export default Task;