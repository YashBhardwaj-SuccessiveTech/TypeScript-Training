// 3.creat pages: Home and About.
// Implement file routing.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

// 4.Enhance the previous application by adding protected pages that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user.

import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:"center", gap:10}}>
        <Link href="/Assignment-3/Question3/Home">Home</Link> 
        <Link href="/Assignment-3/Question3/About">About</Link>
        <Link href="/Assignment-3/Question4/Login">Login</Link>
    </div> 
  )
} 

export default page

