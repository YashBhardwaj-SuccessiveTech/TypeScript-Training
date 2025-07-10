// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. 
// Add a validation rule to ensure that the two passwords match before allowing the form submission.

import PasswordVerfication from '@/app/Components/Assignment4Components/PasswordVerfication'
import React from 'react'

function page() {
  return (
    <div>
      <p>Build a registration form with two password fields. Implement controlled components for both password inputs. 
          Add a validation rule to ensure that the two passwords match before allowing the form submission.</p>
        <PasswordVerfication/>
    </div>
  )
}

export default page