// 1. Create a Next.js component using the App Router that fetches data on the server side (SSR)
//  from a public API (e.g., JSONPlaceholder) and displays the results on the page.

import FetchData from '@/app/Components/Assignment5Components/FetchData'
import React from 'react'

function page() {
  return (
    <div>
      <p>Create a Next.js component using the App Router that fetches data on the server side (SSR) from a public API (e.g., JSONPlaceholder) and displays the results on the page.</p>
        <FetchData/>
    </div>
  )
}

export default page

