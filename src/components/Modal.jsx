import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ReactDom from "react-dom";

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
};

const Modal = ({
  children,
  isOpen,
  onClose,
  isDismissible = true,
  showCloseIcon = true,
  toAnimate = true,
  animationEnter = "zoomIn",
  animationExit = "zoomOut",
  className = "",
}) => {
  const modalRef = useRef();
  const [mouseDownEv, setMouseDownEv] = useState(null);

  useEffect(() => {
    if (!isOpen || !isDismissible) return;
    const checkEscAndCloseModal = e => {
      if (e.key !== "Escape") return;
      onClose();
    };
    document.addEventListener("keydown", checkEscAndCloseModal);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", checkEscAndCloseModal);
    };
  }, [isOpen, onClose, isDismissible]);

  const handleMouseDown = e => {
    setMouseDownEv({ screenX: e.screenX, screenY: e.screenY });
  };

  const checkOutsideAndCloseModal = e => {
    if (!isDismissible) return;
    if (
      modalRef.current.contains(e.target) ||
      Math.abs(mouseDownEv.screenX - e.screenX) > 15 ||
      Math.abs(mouseDownEv.screenY - e.screenY) > 15
    )
      return;
    onClose();
    setMouseDownEv(null);
  };

  const getEnterAnimation = animEnter => {
    return {
      slideInFromDown: "animate-[slideInFromDown_500ms_forwards]",
      slideInFromUp: "animate-[slideInFromUp_500ms_forwards]",
      slideInFromLeft: "animate-[slideInFromLeft_500ms_forwards]",
      slideInFromRight: "animate-[slideInFromRight_500ms_forwards]",
      zoomIn: "animate-[zoomIn_500ms_forwards]",
    }[animEnter];
  };

  const getExitAnimation = animExit => {
    return {
      slideOutToDown: "animate-[slideOutToDown_500ms_forwards]",
      slideOutToUp: "animate-[slideOutToUp_500ms_forwards]",
      slideOutToLeft: "animate-[slideOutToLeft_500ms_forwards]",
      slideOutToRight: "animate-[slideOutToRight_500ms_forwards]",
      zoomOut: "animate-[zoomOut_500ms_forwards]",
    }[animExit];
  };

  return (
    <>
      <Portal>
        <div
          className={`fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center overflow-hidden bg-black bg-opacity-30 duration-500 ${
            isOpen ? "opacity-1 z-[1000] transition-opacity" : "-z-50 opacity-0 transition-all"
          } `}
          onClick={checkOutsideAndCloseModal}
          onMouseDown={handleMouseDown}
        >
          <div
            ref={modalRef}
            className={`absolute max-h-screen max-w-[100vw] overflow-auto
              ${toAnimate ? "transition-all duration-500 ease-out" : ""}
              ${isOpen ? "opacity-1" : "opacity-0 pointer-events-none select-none"} 
              ${toAnimate && (isOpen ? getEnterAnimation(animationEnter) : getExitAnimation(animationExit))}
              ${className}
              `}
          >
            {showCloseIcon && (
              <div className="mr-4 mt-4 flex">
                <button
                  className="ml-auto flex h-8 w-8 items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800"
                  onClick={onClose}
                >
                  <span>
                    <i className="fa-solid fa-close"></i>
                  </span>
                </button>
              </div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default Modal;
