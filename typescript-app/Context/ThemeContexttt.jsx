// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.
"use client"

import { createContext, useState } from "react"
import Theme from "../src/app/Assignment-2/Question9/Theme";

export const ThemeContext = createContext();


export  const ThemeProvider= ({children})=>{
    const [theme, setTheme ] = useState("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// export {ThemeContext}