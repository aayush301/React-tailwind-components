import React, { useState } from 'react'

const SpeedDial = ({ children, direction = "up" }) => {
  const [show, setShow] = useState(false);

  const getPosition = (i) => {
    if (direction == "up") return { top: `${-(i + 1) * 50}px`, left: 0 }
    if (direction == "down") return { top: `${(i + 1) * 50}px`, left: 0 }
    if (direction == "left") return { left: `${-(i + 1) * 50}px`, top: 0 }
    if (direction == "right") return { left: `${(i + 1) * 50}px`, top: 0 }
  }

  const getTransitionDelay = (i) => {
    if (show) return { transitionDelay: `${i * 100}ms` }
    else return { transitionDelay: `${(children.length - i - 1) * 100}ms` }
  }

  return (
    <>
      <div className='inline-block relative w-fit h-fit' onClick={() => setShow(show => !show)}>
        <span className={`rounded-full bg-teal-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-teal-600 ${show ? "rotate-45" : ""}`}>
          <i className="fa-solid fa-plus"></i>
        </span>

        <ul className={!show ? "pointer-events-none" : ""}>
          {children.map((item, i) => (
            <li key={i} className={`absolute z-50 ${show ? "scale-100" : "scale-0"} transition duration-300`} style={{ ...getTransitionDelay(i), ...getPosition(i) }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SpeedDial