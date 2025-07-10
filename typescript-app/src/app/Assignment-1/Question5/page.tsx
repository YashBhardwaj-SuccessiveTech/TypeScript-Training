import React from 'react'
import TaskList from '../../Components/Assignment1Components/TaskList';

function page() {

    const list = ["task1","task2","task3","task4"];

  return (
    <div>
        <p>5.Create a functional component named TaskList that accepts an array of task names as a prop.
             Use the map function to render each task name as a list item.
             Import and render the TaskList component in the App component with an array of tasks.</p>
             <br></br>
        <TaskList list={list}/>
    </div>
  )
}

export default page