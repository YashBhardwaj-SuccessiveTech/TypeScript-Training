// 13.create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.

"use client"
import React from 'react'

const Child = (React.memo)((props)=>{
  function resetCount(){
    props.setCount(0);
  }
  return (
    <div className='child'>
      Count: {props.count}
      <button onClick={resetCount}>Reset Count</button>
    </div>
  )
})

export default Child