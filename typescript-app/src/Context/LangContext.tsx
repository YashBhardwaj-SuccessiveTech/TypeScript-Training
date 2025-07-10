// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

"use client"

import { createContext, ReactNode, useState } from "react"

interface LangContextType{
    language: string,
    setlanguage: (lang: string) => void;
}


export const LanguageContext = createContext<LangContextType>({
  language: "en",
  setlanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider= ({children}: LanguageProviderProps)=>{
    const [language, setlanguage] = useState("en");

    return(
        <LanguageContext.Provider value={{language, setlanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
