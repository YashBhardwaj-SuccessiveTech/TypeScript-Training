'use client';

import React, { useState } from 'react';

// Define the type for the onSubmit prop
interface LoginFormProps {
  onSubmit: (data: { username: string; password: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState<string>(''); // username state is a string
  const [password, setPassword] = useState<string>(''); // password state is a string
  const [submitted, setSubmitted] = useState<boolean>(false); // submitted state is a boolean

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      onSubmit({ username, password });
      setSubmitted(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Set username when input changes
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Set password when input changes
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {submitted && <p>Form Submitted</p>} {/* Display message when form is submitted */}
    </>
  );
}
