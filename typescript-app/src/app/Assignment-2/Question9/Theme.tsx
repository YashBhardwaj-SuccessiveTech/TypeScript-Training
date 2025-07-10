"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../../../Context/ThemeContexttt";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <div>
      <div style={{ backgroundColor: theme == "light" ? "black" : "white" , height:250, color:theme == "light" ? "White" : "Black"}}>
        This is the part
        <button onClick={changeTheme}>toggle Theme</button>
      </div>
    </div>
  );
};

export default Theme;
