// Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

"use client"

import React, { useState } from 'react'

function CounterWithStep() {

    const [count, setcount] = useState(0);
    const [steps, setSteps] = useState(1);

    function updateSteps(e: React.ChangeEvent<HTMLInputElement>){
      setSteps(Number(e.target.value))
    }

    function Incrementhandler(){
        setcount(count+steps)
    }

    function Decrementhandler(){
        setcount(count-steps)
    }

  return (
    <div>
        <br />
        <br />
        <p>Count: {count}</p>
        <br />
        <br />
        <button onClick={Incrementhandler}>Increment</button>
        <button onClick={Decrementhandler}>Decrement</button>
        <input
        type="number"
        placeholder='enter steps value'
        onChange={updateSteps}
        >
        </input>
    </div>
  )
}

export default CounterWithStep