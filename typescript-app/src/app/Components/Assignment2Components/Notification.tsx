// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

"use client"

import React, { useEffect, useState } from 'react'

function Notification() {
  const [message, setmessage] = useState("");

  function clickhandler(){
    setmessage("A new message");
  }

  useEffect(() => {
    if(message){
      setTimeout(() => {
        setmessage("");
      }, 5000);
    }

  }, [message])
  


  return (
    <div>
      <button onClick={clickhandler}>show Mesage</button>
      <div> {message} </div> 
    </div>
  )
}
   
export default Notification