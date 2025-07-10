"use client";

import React, { useState } from "react";
import ShowMessage from "./ShowMessage";

function ControlledComponent() {
  const [input, setInput] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState("");

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    setError(""); // clear error when typing
    setShowMessage(false); // hide message when input changes
  }

  function verifyHandler() {
    if (input === "show") {
      setShowMessage(true);
      setError("");
    } else {
      setShowMessage(false);
      setError("Entered text is not valid");
      setInput(""); // clear input
    }
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder="Enter show to display a message"
      />
      <button onClick={verifyHandler}>Check</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {showMessage && <ShowMessage />}
    </div>
  );
}

export default ControlledComponent;
