import React from 'react'

const Info = ({ msg }) => {
  return (
    <>
      <div className=" flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-5 " >
        <div className="flex items-center justify-center w-12 bg-blue-500">
          <i className="fa-solid fa-circle-info fa-lg text-white"></i>
        </div>

        <div className="px-4 py-2">
          <span className="font-semibold text-blue-500 dark:text-blue-400" >Info</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
        </div>
      </div>
    </>
  )
}

export default Info