// Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

import React from 'react'
import Clock from '../../Components/Assignment2Components/Clock'

function page() {
  return (
    <div>
        <p>Create a functional component called Clock.
            Use the useState hook to manage a state variable named time initialized to the current time.
            Use the useEffect hook to update the time state every second to display the current time.
            Render the current time in a p element.
            When the component unmounts, clear the interval to stop updating the time.
        </p>
        <Clock/>
        
    </div>
  )
}

export default page