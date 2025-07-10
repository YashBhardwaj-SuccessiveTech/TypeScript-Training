// 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.

"use client";

import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
    
  };

  return (
    <div className="counter">
      <button onClick={Decrement}> - </button>
      <p>
        <b>Count: {counter} </b>
      </p>
      <button onClick={Increment}> + </button>
    </div>
  );
}
 