// 3.creat pages: Home and About.
// Implement file routing.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User{
  username: string,
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router=useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <main style={{ padding: 30 }}>
      <h1>Home Page</h1>
      <p>{user ? `Welcome, ${user.username}!` : "Please log in."}</p>
      <div>
        
        <button onClick={()=>router.push("/Assignment-3/Question3/About")}> About </button>
        <button onClick={()=>router.push("/Assignment-3/Question5/Dashboard")}> Dashboard </button>
      </div>
    </main>
  );
}  