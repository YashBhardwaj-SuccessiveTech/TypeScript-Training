// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.

"use client"
import { useState } from "react";

export function Weather() {
  const [temp, setTemp] = useState("");

  function changeHandler(event){
    setTemp(event.target.value);
  } 

  return (
    <>
    <br></br>
      <input 
        type="number"
        placeholder="enter temperature"
        value={temp}
        onChange={changeHandler}
      />

      {temp !== undefined && (
        <div>
          {temp < 10 ? (
            <h2>It's cold today!</h2>
          ) : temp > 25 ? (
            <h2>It's sunny today!</h2>
          ) : (
            <h2>The weather is moderate.</h2>
          )}
          <p>Temperature: {temp}°C</p>
        </div>
      )}
    </>
  );
}
