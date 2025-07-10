// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.
"use client"


import React, { useState } from 'react'

function PersonForm() {

    const [firstName, setfirstName]= useState("");
    const [lastName, setlastName] = useState("");
    const [age, setage]= useState("");

  return (
    <div>
        <br />
        <label htmlFor="firstName">Enter First Name: </label>
        <input 
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Enter firstName'
            onChange={(event)=>setfirstName(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="lastName">Enter Last Name: </label>
        <input 
            type='text'
            name='lastName'
            placeholder='Enter lastName'
            onChange={(event)=>setlastName(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="age">Enter Age: </label>
        <input 
            type='number'
            name='firstName'
            placeholder='Enter age'
            onChange={(event)=>setage(event.target.value)}
        ></input>

        <br></br>
        <br></br>

        <div >
            <h2>Entered Information:</h2> 
            <br />
            <h4>First Name : {firstName}</h4>
            <br />
            <h4>Last Name: {lastName}</h4>
            <br />
            <h4>Age: {age}</h4>
        </div>

    </div>
  )
}

export default PersonForm

