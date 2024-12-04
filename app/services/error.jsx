 'use client'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])
 
  return (
    <div className=' container'>
      <h2>Something went wrong!</h2>
      <h2>{error.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}