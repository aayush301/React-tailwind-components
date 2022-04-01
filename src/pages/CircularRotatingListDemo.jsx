import React from 'react'
import CircularRotatingList from '../components/CircularRotatingList'

const items = [
  {
    text: "User... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis quos inventore quisquam laboriosam atque temporibus perferendis. Possimus, molestias ipsum?",
    icon: <i className="fa-solid fa-user fa-xl"></i>
  },
  {
    text: "Message... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis quos inventore quisquam laboriosam atque temporibus perferendis. Possimus, molestias ipsum?",
    icon: <i className="fa-solid fa-message fa-xl"></i>
  },
  {
    text: "Pen... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis quos inventore quisquam laboriosam atque temporibus perferendis. Possimus, molestias ipsum?",
    icon: <i className="fa-solid fa-pen fa-xl"></i>
  },
  {
    text: "Chart... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis quos inventore quisquam laboriosam atque temporibus perferendis. Possimus, molestias ipsum?",
    icon: <i className="fa-solid fa-chart-line fa-xl"></i>
  },
  {
    text: "Star... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis quos inventore quisquam laboriosam atque temporibus perferendis. Possimus, molestias ipsum?",
    icon: <i className="fa-solid fa-star fa-xl"></i>
  },
];

const CircularRotatingListDemo = () => {
  return (
    <>
      <h1 className='m-8 text-center'>Circular Rotating List</h1>
      <div className='m-8'>
        <CircularRotatingList items={items} />
      </div>
    </>
  )
}

export default CircularRotatingListDemo