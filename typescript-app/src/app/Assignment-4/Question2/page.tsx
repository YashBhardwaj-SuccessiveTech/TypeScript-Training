// 2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons.
// Ensure that each input is a controlled component.
// When the user submits the form, log the form data to the console.
"use client";

import React, { useState } from "react";

function page() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    agreeToTerms: false,
    gender: "",
  });

  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    console.log("Form Data Submitted:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        Agree to Terms and Conditions
      </label>

      <br />

      <fieldset>
        <legend>Gender:</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
            required
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
          Other
        </label>
      </fieldset>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}


export default page;
