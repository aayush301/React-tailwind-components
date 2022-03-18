import React, { useState } from 'react'

const Rating = ({ rating, setRating, count, color, icon }) => {

  const [hoverRating, setHoverRating] = useState(0);
  count = count || 5;
  color = color || "#facc15";
  icon = icon || "star";


  const handleClick = (idx) => setRating(idx);

  const getIconType = (idx) => {
    if (hoverRating == 0) {
      return (idx <= rating) ? "fa-solid" : "fa-regular"
    }
    return (idx <= hoverRating) ? "fa-solid" : "fa-regular";
  }

  return (
    <>
      <div>
        {Array(count).fill(0).map((_, i) => i + 1).map(idx => (
          <span
            key={idx}
            className='cursor-pointer mr-0.5'
            style={{ color }}
            onClick={() => handleClick(idx)}
            onMouseEnter={() => setHoverRating(idx)}
            onMouseLeave={() => setHoverRating(0)}
          >
            <i className={`${getIconType(idx)} fa-${icon}`}></i>
          </span>
        ))}
      </div>
    </>
  )
}

export default Rating