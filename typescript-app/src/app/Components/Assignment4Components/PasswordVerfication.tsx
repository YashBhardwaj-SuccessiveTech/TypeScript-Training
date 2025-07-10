// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. 
// Add a validation rule to ensure that the two passwords match before allowing the form submission.
"use client"

import React, { useState } from 'react'

function PasswordVerfication() {

    const [pass, setPass ]= useState("");
    const [confpass, setConfpass] = useState("");
    const [msg, setmsg] = useState("");

    function passHandler(e: React.ChangeEvent<HTMLInputElement>){
        setPass(e.target.value);
    }

    function confpassHandler(e: React.ChangeEvent<HTMLInputElement>){
        setConfpass(e.target.value)
    }

    function SubmitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        pass==confpass?setmsg("Password Matched Successfully"):setmsg("Password Do not Match");
    }

  return (

    <div>
        <form onSubmit={SubmitHandler}>
            <label>
                Enter Password:
                <input
                type='password'
                name='password'
                value={pass}
                onChange={passHandler}
                />
            </label>

            <label>
                Confirm Password:
                <input
                type='password'
                name='confirm password'
                value={confpass}
                onChange={confpassHandler}
                />
            </label>

            <button type='submit'>Submit</button>
        </form>

        <h2>{msg}</h2>


    </div>

  )
}

export default PasswordVerfication