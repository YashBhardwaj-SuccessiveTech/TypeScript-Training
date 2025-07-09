// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.
"use client"

import React, { useMemo, useState } from 'react'

function EmployeeSalary() {

    const employees = [
        {
            name:"Yash",
            salary:25000
        },
        {
          name:"Abhishek",
          salary: 30000,
        },
        {
          name:"Mansahib",
          salary:25000,
        }
    ]

    const [employee,setEmployee] = useState(employees);

    const updateHandler=()=>{
    setEmployee((prev)=>prev.map((prev)=>({...prev, salary:Math.floor(Math.random()*50000)})))
  }

    const avgsalary = useMemo(()=>{
      const sum = employee.reduce((accumulator, employee)=>accumulator+employee.salary,0);
      const avg = Math.floor(sum/employees.length);
      return avg;
    },[employee])

  return (
    <div>
      <h2>Employees Details: </h2>
      <ul>
        {employee.map((employee,index)=>(
          <li key={index}>{employee.name }: {employee.salary}</li>
        ))}
      </ul>

      <button onClick={updateHandler}>Update Salary</button>

      <p>Average Salary : {avgsalary}</p>
    </div>
  )
}

export default EmployeeSalary






