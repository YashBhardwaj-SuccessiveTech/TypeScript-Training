// Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.

"use client"


import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date()); // Initialize with the current date and time

    useEffect(() => {
        // Create an interval that updates the time every second
        const intervalId = setInterval(() => {
            setTime(new Date()); // Update the time every second
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div>
            <p>Current Time: {time.toLocaleTimeString()}</p> {/* Format the time to a readable format */}
        </div>
    );
}

export default Clock;
