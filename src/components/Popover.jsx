import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
}

// @param space: it is the dist between the tip and the element
// @param children: It is expected to have only 2 children: first for main element and second for popover element
const Popover = ({ children, position = "bottom", space = 5 }) => {

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef();
  const elementRef = useRef();

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
    const { x, y } = getPoint(elementRef.current, popoverRef.current, position, space);
    popoverRef.current.style.left = `${x}px`;
    popoverRef.current.style.top = `${y}px`;
  }

  const getPoint = (element, popover, position, space) => {
    const eleRect = element.getBoundingClientRect();
    const pt = { x: 0, y: 0 };
    switch (position) {
      case "bottom": {
        pt.x = eleRect.left + (element.offsetWidth - popover.offsetWidth) / 2;
        pt.y = eleRect.bottom + (space + 10);
        break;
      }
      case "left": {
        pt.x = eleRect.left - (popover.offsetWidth + (space + 10));
        pt.y = eleRect.top + (element.offsetHeight - popover.offsetHeight) / 2;
        break;
      }
      case "right": {
        pt.x = eleRect.right + (space + 10);
        pt.y = eleRect.top + (element.offsetHeight - popover.offsetHeight) / 2;
        break;
      }
      case "top": {
        pt.x = eleRect.left + (element.offsetWidth - popover.offsetWidth) / 2;
        pt.y = eleRect.top - (popover.offsetHeight + (space + 10));
        break;
      }
    }
    return pt;
  }

  const popoverClasses = `fixed z-50 border ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition
    ${position == "top" && " after:absolute after:content-[''] after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-t-white"}
    ${position == "bottom" && " after:absolute after:content-[''] after:left-1/2 after:bottom-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-b-white"}
    ${position == "left" && " after:absolute after:content-[''] after:top-1/2 after:left-full after:-translate-y-1/2 after:border-[10px] after:border-transparent after:border-l-white"}
    ${position == "right" && " after:absolute after:content-[''] after:top-1/2 after:right-full after:-translate-y-1/2 after:border-[10px] after:border-transparent after:border-r-white"}
  `;

  return (
    <>
      {React.cloneElement(children[0], {
        onClick: handleClick,
        ref: elementRef
      })}

      <Portal>
        <div ref={popoverRef} className={popoverClasses}>{children[1]}</div>
      </Portal>
    </>
  )
}

export default Popover