import React from 'react'
import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
}

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <Portal>
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-[1000]">
          <div className='fixed top-1/2 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 bg-white z-[1000] rounded-sm shadow-lg sm:animate-fadeInUp'>
            <button className='absolute top-4 right-4 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center' onClick={onClose}>
              <span><i className="fa-solid fa-close"></i></span>
            </button>
            {children}
          </div>
        </div>
      </Portal>
    </>
  )
}

export default Modal