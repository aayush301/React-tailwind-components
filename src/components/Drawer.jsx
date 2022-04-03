import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
}


const Drawer = ({ children, title = "Drawer", isOpen, onClose, placement = "right" }) => {

  const drawerRef = useRef();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }, [isOpen]);

  const checkAndCloseDrawer = e => {
    if (drawerRef.current.contains(e.target)) return;
    onClose();
  }

  const wrapperClasses = () => {
    if (isOpen) return "top-0 bottom-0 left-0 right-0";

    switch (placement) {
      case "right": return "w-0 top-0 bottom-0 right-0";
      case "left": return "w-0 top-0 bottom-0 left-0";
      case "top": return "h-0 left-0 right-0 top-0";
      case "bottom": return "h-0 left-0 right-0 bottom-0";
    }
  }

  const drawerClasses = () => {
    switch (placement) {
      case "right": return "right-0 w-[300px] h-full " + (!isOpen ? " translate-x-full" : "");
      case "left": return "left-0 w-[300px] h-full " + (!isOpen ? " -translate-x-full" : "");
      case "top": return "top-0 h-[300px] w-full " + (!isOpen ? " -translate-y-full" : "");
      case "bottom": return "bottom-0 h-[300px] w-full " + (!isOpen ? " translate-y-full" : "");
    }
  }

  return (
    <>
      <Portal>
        <div className={`fixed z-[1000] ${wrapperClasses()}`} onClick={checkAndCloseDrawer}>
          <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
          <div ref={drawerRef} className={`absolute bg-white transition duration-500 overflow-auto ${drawerClasses()}`}>
            <div className='flex justify-start items-center p-4'>
              <button className='w-8 h-8' onClick={onClose}>
                <span><i className="fa-solid fa-close"></i></span>
              </button>
              <div>{title}</div>
            </div>
            {children}
          </div>
        </div>
      </Portal>
    </>
  )
}

export default Drawer