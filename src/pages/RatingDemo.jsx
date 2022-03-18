import React, { useState } from 'react'
import Rating from '../components/Rating'

const RatingDemo = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);

  return (
    <>
      <h1 className="m-8 text-center">Rating</h1>
      <div className="flex flex-col ml-8 gap-4">
        <Rating rating={rating1} setRating={setRating1} />
        <Rating rating={rating2} setRating={setRating2} color={"red"} />
        <Rating rating={rating3} setRating={setRating3} color={"blue"} count={8} />
        <Rating rating={rating4} setRating={setRating4} color={"red"} icon={"heart"} />
      </div>
    </>
  )
}

export default RatingDemo