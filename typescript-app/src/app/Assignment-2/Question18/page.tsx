// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.

'use client';

import React, { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function UserPreference() {
  const [theme, setTheme, removeTheme] = useLocalStorage("theme", "light");
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Theme: {theme}</h2>

      <input
        type="text"
        placeholder="Type a theme"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setTheme(input)}>Save</button>
      <button onClick={removeTheme}>Remove</button>
    </div>
  );
}