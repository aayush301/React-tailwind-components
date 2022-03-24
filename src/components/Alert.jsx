import React from 'react'

const Success = ({ msg, onClose }) => {
  return (
    <>
      <div className="inline-flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 " >
        <div className="flex items-center justify-center w-12 bg-green-500">
          <i className="fa-solid fa-circle-check fa-lg text-white"></i>
        </div>

        <div className="relative flex-grow px-4 py-2">
          <span className="font-semibold text-green-500 dark:text-green-400" >Success</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
          <span className="absolute top-2 right-2 cursor-pointer" onClick={onClose}><i className="fa-solid fa-close"></i></span>
        </div>
      </div>
    </>
  )
}

const Info = ({ msg, onClose }) => {
  return (
    <>
      <div className="inline-flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" >
        <div className="flex items-center justify-center w-12 bg-blue-500">
          <i className="fa-solid fa-circle-info fa-lg text-white"></i>
        </div>

        <div className="relative flex-grow px-4 py-2">
          <span className="font-semibold text-blue-500 dark:text-blue-400" >Info</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
          <span className="absolute top-2 right-2 cursor-pointer" onClick={onClose}><i className="fa-solid fa-close"></i></span>
        </div>
      </div>
    </>
  )
}

const Warning = ({ msg, onClose }) => {
  return (
    <>
      <div className="inline-flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" >
        <div className="flex items-center justify-center w-12 bg-yellow-400">
          <i className="fa-solid fa-triangle-exclamation fa-lg text-white"></i>
        </div>

        <div className="relative flex-grow px-4 py-2">
          <span className="font-semibold text-yellow-400 dark:text-yellow-300" >Warning</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
          <span className="absolute top-2 right-2 cursor-pointer" onClick={onClose}><i className="fa-solid fa-close"></i></span>
        </div>
      </div>
    </>
  )
}

const Error = ({ msg, onClose }) => {
  return (
    <>
      <div className="inline-flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" >
        <div className="flex items-center justify-center w-12 bg-red-500">
          <i className="fa-solid fa-circle-xmark fa-lg text-white"></i>
        </div>

        <div className="relative flex-grow px-4 py-2">
          <span className="font-semibold text-red-500 dark:text-red-400" >Error</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
          <span className="absolute top-2 right-2 cursor-pointer" onClick={onClose}><i className="fa-solid fa-close"></i></span>
        </div>
      </div>
    </>
  )
}



const Alert = ({ type, msg = "", onClose }) => {
  switch (type) {
    case "success": return <Success msg={msg} onClose={onClose} />
    case "info": return <Info msg={msg} onClose={onClose} />
    case "warning": return <Warning msg={msg} onClose={onClose} />
    case "error": return <Error msg={msg} onClose={onClose} />
    default: return <Success msg={msg} onClose={onClose} />
  }
}

export default Alert