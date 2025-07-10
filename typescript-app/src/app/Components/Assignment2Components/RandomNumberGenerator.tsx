// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.
"use client"

import React, { useState } from 'react'

function RandomNumberGenerator() {

    const [randomNumber,setrandomNumber] = useState(Math.floor(Math.random()*100)+1);


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

        <button style={{marginRight:"10px"}} onClick={()=>setrandomNumber(Math.floor(Math.random()*100))}>generate random no   </button>
        {randomNumber}
       

    </div>
  )
}

export default RandomNumberGenerator