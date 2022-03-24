import React, { useEffect, useRef, useState } from 'react'

const Toast = ({ type, msg, position, onClose, hasCloseBtn, autoClose, autoCloseTimeout, }) => {
  const getBgColor = () => {
    switch (type) {
      case "success": return "bg-green-500";
      case "info": return "bg-blue-500";
      case "warning": return "bg-yellow-400";
      case "error": return "bg-red-500";
      default: return "bg-green-500";
    }
  }

  const getTag = () => {
    switch (type) {
      case "success": return "Success";
      case "info": return "Info";
      case "warning": return "Warning";
      case "error": return "Error";
      default: return "Success";
    }
  }

  const getTagColor = () => {
    switch (type) {
      case "success": return "text-green-500";
      case "info": return "text-blue-500";
      case "warning": return "text-yellow-400";
      case "error": return "text-red-500";
      default: return "text-green-500";
    }
  }

  const getIcon = () => {
    switch (type) {
      case "success": return "fa-circle-check";
      case "info": return "fa-circle-info";
      case "warning": return "fa-triangle-exclamation";
      case "error": return "fa-circle-xmark";
      default: return "fa-circle-check";
    }
  }

  const getAnimationClasses = () => {
    if (show) return "opacity-1 translate-x-0";
    if (position.endsWith("right")) return "opacity-0 translate-x-[100px]";
    return "opacity-0 -translate-x-[100px]";
  }

  const [show, setShow] = useState(false);
  const toastRef = useRef();

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
    if (autoClose) window.setTimeout(removeToast, autoCloseTimeout);
  }, []);

  const removeToast = () => {
    setShow(false);
    toastRef.current.addEventListener("transitionend", onClose);
  }


  return (
    <>
      <div ref={toastRef} className={`flex transition ${getAnimationClasses()} w-screen sm:w-[300px] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800`} >
        <div className={`shrink-0 flex items-center justify-center w-12 ${getBgColor()}`}>
          <i className={`fa-solid ${getIcon()} fa-lg text-white`}></i>
        </div>

        <div className="relative flex-grow pl-4 pr-8 py-2">
          <span className={`font-semibold ${getTagColor()}`} >{getTag()}</span >
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {msg}
          </p>
          {hasCloseBtn && (
            <span className="absolute top-2 right-2 cursor-pointer" onClick={removeToast}><i className="fa-solid fa-close"></i></span>
          )}
        </div>
      </div>
    </>
  )
}

export default Toast