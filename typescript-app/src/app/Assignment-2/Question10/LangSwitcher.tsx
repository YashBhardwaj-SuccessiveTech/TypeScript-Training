// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.
"use client"
import React, { useContext } from 'react'
import { LanguageContext } from '../../../../Context/LangContext'

const LangSwitcher = () => {
    const {language, setlanguage} = useContext(LanguageContext);
  return (
    <div>

        {language=="en"?<p>Hello world</p>:<p>Holla world</p>}
        <br/>
        <button onClick={()=>setlanguage(language=="en"?"sp":"en")}>Switch to Spanish</button>
        <button onClick={()=>setlanguage(language=="sp"?"en":"sp")}>Switch to English</button>

    </div>
  )
}

export default LangSwitcher