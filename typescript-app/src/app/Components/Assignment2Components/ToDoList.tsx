// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

"use client";

import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};


const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function AddTodo() {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), completed: false, text: input }]);
    setInput("");
  }

  function toggle(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteHandler(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter you todo task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={AddTodo}>Add ToDo</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggle(todo.id)}
              />
              {todo.text}
              <button onClick={() => deleteHandler(todo.id)}>
                delete Task
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
