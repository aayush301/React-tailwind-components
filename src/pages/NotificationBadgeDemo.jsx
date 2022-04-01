import React from 'react'

const NotificationBadgeDemo = () => {
  return (
    <>
      <div className="m-6 relative w-fit">
        <span className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg shadow-lg">
          <i className="fa-solid fa-message"></i>
        </span>
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 p-2 bg-red-600 rounded-full"></span>
      </div>

      <div className="m-6 relative w-fit">
        <span className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg shadow-lg">
          <i className="fa-solid fa-message"></i>
        </span>
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 py-1 px-2
          bg-indigo-700 text-white rounded-full whitespace-nowrap text-[10px] text-center font-bold">
          New
        </span>
      </div>

      <div className="m-6 relative w-fit">
        <span className="flex items-center justify-center p-4 text-3xl bg-blue-500 text-white rounded-lg shadow-lg">
          <i className="fa-solid fa-message"></i>
        </span>
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 py-1.5 px-3
          bg-indigo-700 text-white rounded-full whitespace-nowrap text-md text-center font-bold">
          100+
        </span>
      </div>

      <div className="m-6 relative w-fit">
        <span className="flex items-center justify-center p-2 bg-teal-500 text-white rounded-lg shadow-lg">
          View Emails
        </span>
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 py-1 px-2
          bg-indigo-700 text-white rounded-full whitespace-nowrap text-[13px] text-center font-bold">
          10
        </span>
      </div>
    </>
  )
}

export default NotificationBadgeDemo