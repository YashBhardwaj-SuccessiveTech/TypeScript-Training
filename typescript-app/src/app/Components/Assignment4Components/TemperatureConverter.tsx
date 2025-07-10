// 8.Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit. 
// Implement controlled components for both inputs. When the user enters a value in one input, 
// the other input should update with the converted temperature.

"use client"

import React, { useState } from 'react'

function TemperatureConverter() {
    const [tempCel, setTempCel] = useState("");
    const [tempfar, setTempFar] = useState("");

    function changeCel(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTempCel(value);

    if (value === '') {
      setTempFar('');
      return;
    }

    const celsius = parseFloat(value);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9) / 5 + 32;
      setTempFar(fahrenheit.toFixed(2));
    }
  }

  function changeFar(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTempFar(value);

    if (value === '') {
      setTempCel('');
      return;
    }

    const fahrenheit = parseFloat(value);
    if (!isNaN(fahrenheit)) {
      const celsius = ((fahrenheit - 32) * 5) / 9;
      setTempCel(celsius.toFixed(2));
    }
  }


  return (
    <div>
        <input
        type='number'
        placeholder='Enter Temperature in Celsius'
        value={tempCel}
        onChange={changeCel}
        />

        <input
        type='number'
        placeholder='Enter Temperature in Fahrenheit'
        value={tempfar}
        onChange={changeFar}
        />
    </div>
  )
}

export default TemperatureConverter