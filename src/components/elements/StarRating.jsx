import React from 'react'

const StarRating = ({stars = 0}) => {

  return (
    <div className="star-rating">

    {
        [...Array(5)].map((_, i) => (
            <i key={i} className={ i < stars ? 'fa-solid fa-star' : 'fa-regular fa-star' }></i>
        ))
    }

    </div>
  )
}

export default StarRating