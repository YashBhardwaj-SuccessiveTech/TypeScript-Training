
// 3. Enhance your Next.js component that fetches data from a public API by adding a loading indicator, such as a spinner. 
// This indicator should be visible while the data is being fetched and hidden once the data has loaded successfully. 
// Ensure the loading state is properly managed on the client side, especially when implementing retry functionality. 
// Use the native fetch function and integrate this loading feedback seamlessly with the error handling and data display in your component.

import Spinner from '@/app/Components/Assignment5Components/FetchDataWithSpinner'
import React from 'react'

function page() {
  return (
    <div>
        <Spinner/>
    </div> 
  )
}

export default page