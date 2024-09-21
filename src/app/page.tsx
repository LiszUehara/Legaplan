"use client"

import Head from 'next/head';
import Header from './components/Header'
import TasksList from './components/TasksList';
import './styles.scss';

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>To-Do List</title>
      </Head>
      <Header />
      <main>
        <TasksList />
      </main>
      
    </div>
  )
};
