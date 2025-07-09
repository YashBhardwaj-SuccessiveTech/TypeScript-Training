// 18.Design a custom hook named useLocalStorage to interact with local storage.
// Create a useLocalStorage hook that allows storing and retrieving data from local storage.
// Implement methods for setting, getting, and removing data using the hook.
// Utilize the localStorage API within the hook to manage data.
// Develop a component that uses the useLocalStorage hook to manage user preferences.
"use client"
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  const saveValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue("");
  };

  return [value, saveValue, removeValue];
}  