// 3.Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"), 
// a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

import ControlledComponent from '@/app/Components/Assignment4Components/ControlledComponent'
import React from 'react'

function page() {
  return (
    <div>
        <ControlledComponent/>
    </div>
  )
}

export default page