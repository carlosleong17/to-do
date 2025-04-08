
import { useState } from 'react';
import './App.css'
import React from 'react'


interface Task {
  text: string;
  isCompleted: boolean;
}

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([  
    { text:'Tarea 1', isCompleted: false}, 
    { text:'Tarea 2', isCompleted: true}
  ]);

const handleAddTask = () => {
  setTasks([...tasks,{text: taskText, isCompleted: false}]);
  setTaskText('');
};

const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
  setTaskText(event.target.value)
}

  return (
    <>
      <h1>TO DO - LIST</h1>
      <div className="add-task">
        <input type="text"onInput={handleInput} value={taskText}/>
        <button onClick={handleAddTask}>Añadir Tarea
        </button>
      </div>
      <div className='task-list'>
        {tasks.map((task) => {
          return ( 
            <div className='task'>
              <div>
                <input type='checkbox'checked={task.isCompleted}/>
                <span> {task.text} </span>
              </div>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
