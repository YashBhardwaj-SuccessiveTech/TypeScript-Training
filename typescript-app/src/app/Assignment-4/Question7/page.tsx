// 7.Design a search filter component that consists of an input field. As the user types into the input,
//  use controlled components to filter a list of items displayed below. 
// The list should dynamically update to show only items matching the search query.

import SearchFilter from '@/app/Components/Assignment4Components/SearchFilter'
import React from 'react'

function page() {
  return (
    <div>
        <p>7.Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.</p>
        <SearchFilter/>
    </div>
  )
}

export default page