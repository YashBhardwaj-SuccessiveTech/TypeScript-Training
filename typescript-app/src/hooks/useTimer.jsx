// .Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.




"use client"

import { useState,useEffect } from "react"


export default function useTimer(initial)
{
    const [time,setTime]= useState(initial);
    const [isRunning,setRunning]=useState(false);

    useEffect(()=>{
        let timer;
        if(isRunning && time>0)
        {
            timer= setInterval(()=>{setTime((prev)=>prev-1)},1000);
        }


        return ()=>clearInterval(timer);
    },[time,isRunning])


    function start()
    {
        setRunning(true);
    }

    function pause()
    {
        setRunning(false);
    }


    function reset()
    {
        setRunning(false);
        setTime(initial);
    }

    return {time, start, pause, reset}
}