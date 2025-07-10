"use client";

import { useState } from "react";
import axios from "axios";

interface User{
  id: number,
  name:string,
  email: string,
}

export default function UserList({ initialUsers = [], error = "" }) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [errorMsg, setErrorMsg] = useState(error);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      setErrorMsg("Retry failed: Unable to fetch data.");
    }
    setLoading(false);
  };

  if (errorMsg) {
    return (
      <div style={{ padding: 150 }}>
        <p style={{ color: "red" }}>{errorMsg}</p>
        <button onClick={retryFetch} disabled={loading}>
          {loading ? "Retrying..." : "Retry"}
        </button>
      </div>
    );
  }

  return (
    <main style={{ padding: 150 }}>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
