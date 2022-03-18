import React from 'react'

const Warning = ({ msg }) => {
  return (
    <>
      <div className=" flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-5 " >
        <div className="flex items-center justify-center w-12 bg-yellow-400">
          <i className="fa-solid fa-triangle-exclamation fa-lg text-white"></i>
        </div>

        <div className="px-4 py-2">
          <span className="font-semibold text-yellow-400 dark:text-yellow-300" >Warning</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
        </div>
      </div>
    </>
  )
}

export default Warning