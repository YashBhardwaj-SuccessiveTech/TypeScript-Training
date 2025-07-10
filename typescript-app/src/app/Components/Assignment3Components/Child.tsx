// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."

// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.


"use client"
import { useContext } from "react";
import { Authcontext } from "../../context/Authcontext";
import { ThemeContext } from "@/context/ThemeContext";

export default function ChildComponent(){

    const {username, isloggedIn, setIsloggedIn} = useContext(Authcontext);
    const {theme, toggleTheme} = useContext(ThemeContext);


    function clickHandler(){
        setIsloggedIn(true);
    }

    return(
        <div style={{backgroundColor: theme === "light" ? "#f9f9f9" : "#333", color: theme === "light" ? "#333" : "#f9f9f9"}}>
            <br/>
            <button onClick={clickHandler}>Login Button</button>
            <h2>{isloggedIn?`Welcome, ${username}!`:"Please log in"}</h2>
            <br/>

            <button onClick={toggleTheme}>
                Toggle Theme 
            </button>

            <p>Theme Preference: {theme}</p>

        </div>
    )
}

