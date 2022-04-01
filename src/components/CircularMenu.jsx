import React, { useState } from 'react'

const CircularMenu = ({ children, radius = 70, startAngle = 0, endAngle = 360, endAngleInclusive = false }) => {

  const [show, setShow] = useState(false);
  let angle;
  if (endAngleInclusive) angle = (endAngle - startAngle) / (children.length - 1);
  else angle = (endAngle - startAngle) / (children.length);

  return (
    <>
      <div className='inline-block relative w-fit h-fit' onClick={() => setShow(show => !show)}>
        <span className="rounded-full bg-teal-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-teal-600">
          {show ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </span>

        <ul className={`${show ? "opacity-100" : "opacity-0 pointer-events-none"} transition duration-500`}>
          {children.map((item, i) => (
            <li key={i} className='z-50 absolute top-0 left-0 transition duration-500' style={show ? { transform: `rotate(${startAngle + i * angle}deg) translateY(-${radius}px) rotate(${-(startAngle + i * angle)}deg)` } : {}}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CircularMenu