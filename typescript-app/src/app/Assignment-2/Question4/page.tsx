// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React from 'react'
import RandomNumberGenerator from '../../Components/Assignment2Components/RandomNumberGenerator'

function page() {
  return (
    <div>
      <p>Create a functional component called RandomNumberGenerator.
        Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
        Render the current value of randomNumber.
        Add a button that generates a new random number and updates the state when clicked.</p>
      <br/>
      <br />
        <RandomNumberGenerator/>
    </div>
  )
}

export default page