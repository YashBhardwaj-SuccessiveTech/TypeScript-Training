// 3.creat pages: Home and About.
// Implement file routing.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Authcontext } from '../../../../../Context/Authcontext';

export default function About() {
  const router = useRouter();
  const {username, isloggedIn, setIsloggedIn}=useContext(Authcontext);
  

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push('/Assignment-3/Login');
  }, [router]);

  console.log(isloggedIn);

  return (
    (isloggedIn? <main style={{ padding: 30 }}>
      <h1>Protected About Page</h1>
      <p>Only visible if you are logged in.</p>
    </main>:"Please login")
  );
}  

