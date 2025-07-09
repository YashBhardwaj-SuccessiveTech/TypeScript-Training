"use client"

import React, { useCallback, useState } from 'react';

function ListTasks() {
  const tasks = ["task1", "task2", "task3", "task4"];
  const [status, setStatus] = useState({}); // stores completion status by index

  // dynamic callback using useCallback
  const handleComplete = useCallback((index) => {
    setStatus((prev) => ({
      ...prev,
      [index]: !prev[index] // toggle completed status
    }));
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleComplete(index)}
              style={{ backgroundColor: status[index] ? "green" : "red", marginLeft: "10px" }}
            >
              {status[index] ? "Completed" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTasks;
