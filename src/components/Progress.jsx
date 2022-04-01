import React from 'react'

// @param type: "linear" or "circular"
const Progress = ({ type = "circular", percent = 70 }) => {

  if (type == "linear") {
    return (
      <>
        <div className='flex items-center gap-4'>
          <div className="h-2 rounded-md w-72 bg-gray-200 overflow-hidden">
            <div style={{ width: `${percent}%` }} className="h-full bg-blue-500 rounded-md transition-[width] duration-500"></div>
          </div>
          <div>{percent}%</div>
        </div>
      </>
    )
  }

  else if (type == "circular") {
    return (
      <>
        <div className="relative w-28 h-28 bg-gray-200 rounded-full">
          <div className='absolute w-full h-full rounded-full' style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}>
            <div className='absolute w-full h-full bg-blue-500 rounded-full transition delay-0 duration-500 ease-in-out' style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)", transform: `rotate(${Math.min(percent, 50) * 3.6}deg)` }}></div>
          </div>
          <div className='absolute w-full h-full rounded-full' style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}>
            <div className='absolute w-full h-full bg-blue-500 rounded-full transition duration-500 ease-in-out' style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)", transform: `rotate(${Math.max(percent - 50, 0) * 3.6}deg)` }}></div>
          </div>

          <div className="absolute top-2 bottom-2 left-2 right-2 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{percent}%</div>
        </div>
      </>
    )
  }

  else {
    return null;
  }

}

export default Progress