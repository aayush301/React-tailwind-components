import React from 'react'

const Chip = ({ text = "Dummy text", addCloseBtn = false }) => {
  return (
    <>
      <div className="inline-block w-max px-6 py-2.5 m-4 bg-gray-100 text-gray-700 font-medium text-xs shadow-md leading-tight cursor-pointer rounded-full transition duration-150 ease-in-out
        hover:bg-gray-200 hover:shadow-lg 
        focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-gray-300 active:shadow-lg">
        <span>{text}</span>
        {addCloseBtn && (
          <button className="ml-4 bg-transparent focus:outline-none">
            <i className="fa-solid fa-close"></i>
          </button>
        )}
      </div>
    </>
  )
}

export default Chip