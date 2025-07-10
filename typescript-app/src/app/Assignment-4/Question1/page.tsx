// 1.Create a React component with an input field. Implement it as a controlled component 
// where the input value is controlled by the component's state. When the user types into the input field, 
// the component's state should update accordingly.
"use client"

import React, { useState } from 'react'

function page() {
    const [msg, setMsg] = useState("");

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>){
        setMsg(e.target.value);
    }

  return (
    <div>
        <input
        type='text'
        name='Input Your Message here'
        value={msg}
        onChange={changeHandler}
        />
        <h1>Inputted message is : {msg}</h1>
    </div>
  )
}

export default page