import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem';
import React from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const taskstatus = ["completed" , "Not Completed"]
    const [taskname, setTaskname] = useState('');
    const [description, setDescription] = useState('');
    const[toggleSubmit,setToggleSubmit]=useState(true)
    const [editItem,setEditItem] =useState(null)
   function addTask(taskname,description) {
    if(!taskname){
      alert('please enter the todo name')
    }
    else if(taskname && !toggleSubmit){
      setTasks(
        tasks.map((elem)=>{
          if(elem.id === editItem)
          return{ ...elem,name: taskname,description:description}
        return elem
        
        })
      )
      setToggleSubmit(!toggleSubmit)
      setTaskname('')
      setDescription('')
      setEditItem(null)
    }
    else{
    const newTask = {
    id: Date.now(),
    name: taskname,
    description: description,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setTaskname('');
    setDescription('')
    }
  }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }
  function editTask(id){
    let item = tasks.find((elem)=>{
      return elem.id=== id
    });
    setToggleSubmit(!toggleSubmit)
    setTaskname(item.name)
    setDescription(item.description)
    setEditItem(id)
  }
  //  function toggleCompleted(id) {
  //   setTasks(tasks.map(task => {
  //   if (task.id === id) {
  //   return {...task, completed: !task.completed};
  //   } else {
  //   return task;
  //   } 
  //   }));
    
   return (
    <>
    <div className="todo-list">
    <h1>My Todo </h1>
    <div className='main'>
   <input value={taskname} onChange={e => setTaskname(e.target.value)} placeholder='Todo Name'/>
   <input value={description} onChange={e => setDescription(e.target.value)} placeholder='Todo Description'/>
   { toggleSubmit ? 
   <button style={{ backgroundColor: "#007F73"}} onClick={() => addTask(taskname,description)}>Add Todo</button> : 
   <button style={{ backgroundColor: "#007F73"}} onClick={() => addTask(taskname,description)}>Update Todo</button>}</div>
    <h2>My Todo</h2>
   <div className='container'>
   {tasks.map(task => (
    <TodoItem key={task.id} task={task} editTask ={editTask} deleteTask={deleteTask} taskstatus={taskstatus}/>
    ))}
    </div>
    </div>
    
    </>
)
   }
export default App
