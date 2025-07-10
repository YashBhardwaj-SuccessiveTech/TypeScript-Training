"use client";

import React from "react";

interface Props{
  name: string,
  email: string,
  phone: string,
}

export default function UserProfile({ name, email, phone }: Props) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
}
