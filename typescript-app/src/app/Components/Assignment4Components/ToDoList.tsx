// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them. 
// Use controlled components to handle the input and update the list of tasks.
"use client"

import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTask] = useState<string[]>([]);
    const [input, setInput] = useState("");

    function changeHandler(){
        setTask([...tasks,input]);
        setInput("");
    }

    function HandleInput(e: React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value);
    }

  return (
    <div>
        <input
        type='text'
        value={input}
        name='inputtask'
        onChange={HandleInput}
        />
        <button onClick={changeHandler}>Add New Task</button>
        <div>
            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ToDoList