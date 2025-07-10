// 4.Implement a UserProfile component that displays a user's name, email, and phone number using props. 
// Write tests using React Testing Library to ensure the component correctly renders the provided user data.
"use client"

import UserProfile from '@/Components/Assignment5Components/UserProfile'
import React from 'react'

function page() {
  return (
    <div>
        <UserProfile
        name="John Doe" 
        email="john.doe@example.com" 
        phone="+1-123-456-7890" 
        />

    </div>
  )
}

export default page