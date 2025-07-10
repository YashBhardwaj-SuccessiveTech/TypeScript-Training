// 4.Enhance the previous application by adding protected pages that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React, { useContext } from 'react'

function page() {
  const router = useRouter();
  function clickHandler(){
    router.push("/Assignment-3/Question3");
  }
  return (
    <div>
        <button onClick={clickHandler}>Go to Login Page</button>
    </div>
  )
}
 
export default page