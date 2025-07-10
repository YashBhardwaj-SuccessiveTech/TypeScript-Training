// 7. Create a Component in Next.js that renders a form allowing the user to input data,
//  such as a post title and content. On form submission, use Axios to send a POST request 
// to a public API endpoint, submitting the user's input data. Handle success and error states 
// appropriately in the UI.

import FormAxios from '@/app/Components/Assignment5Components/FormAxios'
import React from 'react'

function page() {
  return (
    <div>
        <FormAxios/>
    </div>
  )
}

export default page