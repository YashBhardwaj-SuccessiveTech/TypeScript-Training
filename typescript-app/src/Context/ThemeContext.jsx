// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

"use client"

const { createContext, useState } = require("react")

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark");


  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
