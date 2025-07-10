// 1.Create a functional component called Counter.
// Inside the component, use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// When the user clicks on the buttons, update the count state accordingly.

"use client"

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function DecrementHandler(){
        setCount(count-1);
    }

    function IncrementHandler(){
        setCount(count+1);
    }

  return (
    <div>
        <button onClick={DecrementHandler}>Decrement</button>
        <p>{count}</p>
        <button onClick={IncrementHandler}>Increment</button>
    </div>
  )
}

export default Counter