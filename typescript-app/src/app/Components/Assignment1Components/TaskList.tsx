// 5.Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.

import React from "react";

interface TaskListProps{
  list:string[],
}

export default function TaskList(props: TaskListProps) {
  return (
    <div>
      <h2>My Tasks are:</h2>
      <ul>
        {props.list.map((task, index) => (
          <li key={index}>{task}</li> 
        ))}
      </ul>
    </div>
  );
}
  