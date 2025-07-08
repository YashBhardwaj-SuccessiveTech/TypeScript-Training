// 1.Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
// Import and render the Greeting component in the App component.

import Greeting from '@/app/Components/Assignment1Components/Greeting'
import React from 'react'

function Page() {
  return (
    <div>
        <p>Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
           Import and render the Greeting component in the App component.</p>
           <br></br>
           <br></br>
        <Greeting/>
    </div>
  )
}

export default Page
 