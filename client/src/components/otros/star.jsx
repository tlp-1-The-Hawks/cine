import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
export const StarRating= () => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = () => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove =() => console.log(value, index)

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  )
}