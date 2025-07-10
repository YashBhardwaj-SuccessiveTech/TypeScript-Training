// 5.Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.

import React from 'react'
import Dashboard from './Dashboard/page'

function page() {
  return (
    <div>
      <h1>Welcome to the DashBoard Page!</h1>
        <Dashboard/>
    </div>
  )
}

export default page