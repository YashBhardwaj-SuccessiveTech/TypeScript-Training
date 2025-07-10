// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.
"use client"

import React, { useState } from 'react'
import useTimer from '../../../hooks/useTimer';

function page() {
    const {start, pause, reset, time}= useTimer(60);

  return (
    <div>
        <p>Count: {time}</p>
        <br/>
        <button onClick={start}>Start</button>
        <br/>
        <button onClick={pause}>Pause</button>
        <br/>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default page