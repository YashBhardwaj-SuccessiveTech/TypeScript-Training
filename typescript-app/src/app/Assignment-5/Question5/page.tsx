// 5. Create a Next.js component that fetches data from a public API (like JSONPlaceholder) 
// using Axios and displays the results on the page. Use the App Router conventions and perform 
// the data fetching on the server side.

"use client"

import axios from "axios";
import { useState ,useEffect } from "react";

interface User{
  id:number,
  name:string,
  email:string,
}

export default function FetchDataWithAxios() {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");


  useEffect(()=>{axios
    .get("https://jsonplaceholder.typicode.com/users") 
    .then((res) => setUser(res.data))
    .catch(() => {
      setError("Can't Fetch Data");
    })},[]);

     if (error) return <p>{error}</p>;

    return (
    <main style={{ padding: 150 }}>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}