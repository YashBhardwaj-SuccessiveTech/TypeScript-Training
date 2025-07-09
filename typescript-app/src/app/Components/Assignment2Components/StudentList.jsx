// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.
"use client"

import React, { useMemo, useState } from 'react'

function StudentList() {
    const [arr,setArr]= useState(["Yash","Geetanjali","Arpit","Mansahib","Abhishek"]);
    
    function addStudentHandler(){
        // setArr([...arr,"new Student"]);
        const newStudent = window.prompt("Enter new student name:");
        if (newStudent && newStudent.trim() !== "") {
            setArr([...arr, newStudent.trim()]);
        }
    }

    const memoizedList = useMemo(() => {
        return arr.map((student, index) => (
            <li key={index}>{student}</li>
        ));
    }, [arr]);
    

  return (
    <div>
        <ul>
            {memoizedList}
        </ul>
        <br/>
        <button onClick={addStudentHandler}>Add new Student</button>
    </div>
  )
}

export default StudentList