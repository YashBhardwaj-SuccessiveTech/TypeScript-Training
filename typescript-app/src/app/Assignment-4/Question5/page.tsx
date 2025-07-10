// 5.Construct a select dropdown menu with multiple options. Control the selected option using state. 
// When an option is selected, display a message showing the selected value.

"use client";

import React, { useState } from "react";

function page() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedOption(e.target.value);
  } 

  return (
    <div>
      <form>
        <select value={selectedOption} onChange={handleChange}>
          <option value="" disabled>
            -- Select an option --
          </option>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
      </form>

      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
}

export default page