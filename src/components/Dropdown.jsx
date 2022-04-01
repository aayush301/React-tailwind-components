import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom';

const classNames = (...arr) => {
  return arr.join(" ");
}

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
}

const Dropdown = ({ children, menu, placement = "bottom-left", space = 5, isDismissible = true, trigger = ["click"] }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const elementRef = useRef();

  useEffect(() => {
    if (!isDismissible || !isOpen) return;
    document.addEventListener("click", checkAndHideDropdown);
    return () => document.removeEventListener("click", checkAndHideDropdown);
  }, [isOpen]);

  const checkAndHideDropdown = e => {
    if (dropdownRef.current.contains(e.target) || elementRef.current.contains(e.target)) return;
    setIsOpen(false);
  }

  const handleMouseEnter = () => {
    if (!trigger.includes("hover")) return;
    setIsOpen(true);
    const { x, y } = getPoint(elementRef.current, dropdownRef.current, placement, space);
    dropdownRef.current.style.left = `${x}px`;
    dropdownRef.current.style.top = `${y}px`;
  }

  const handleMouseLeave = () => {
    if (!trigger.includes("hover")) return;
    setIsOpen(false);
    const { x, y } = getPoint(elementRef.current, dropdownRef.current, placement, space);
    dropdownRef.current.style.left = `${x}px`;
    dropdownRef.current.style.top = `${y}px`;
  }

  const handleClick = () => {
    if (!trigger.includes("click")) return;
    setIsOpen(isOpen => !isOpen);
    const { x, y } = getPoint(elementRef.current, dropdownRef.current, placement, space);
    dropdownRef.current.style.left = `${x}px`;
    dropdownRef.current.style.top = `${y}px`;
  }

  const getPoint = (element, dropdown, placement, space) => {
    const eleRect = element.getBoundingClientRect();
    const pt = { x: 0, y: 0 };
    switch (placement) {
      case "bottom-left": {
        pt.x = eleRect.left;
        pt.y = eleRect.bottom + space;
        break;
      }
      case "bottom-right": {
        pt.x = eleRect.right - dropdown.offsetWidth;
        pt.y = eleRect.bottom + space;
        break;
      }
      case "bottom-center": {
        pt.x = eleRect.left + (element.offsetWidth - dropdown.offsetWidth) / 2;
        pt.y = eleRect.bottom + space;
        break;
      }
      case "top-left": {
        pt.x = eleRect.left - dropdown.offsetWidth - space;
        pt.y = eleRect.top;
        break;
      }
      case "top-right": {
        pt.x = eleRect.right + space;
        pt.y = eleRect.top;
        break;
      }
    }
    return pt;
  }

  const getDropdownClasses = () => {
    return classNames(
      "fixed z-50 border shadow-xl rounded-md transition",
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      !isOpen && placement == "bottom-left" ? "-translate-x-2 -translate-y-2" : "",
      !isOpen && placement == "bottom-right" ? "translate-x-2 -translate-y-2" : "",
      !isOpen && placement == "bottom-center" ? "-translate-y-2" : "",
      !isOpen && placement == "top-left" ? "translate-x-2" : "",
      !isOpen && placement == "top-right" ? "-translate-x-2" : "",
    )
  }

  return (
    <>
      {React.cloneElement(children, {
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ref: elementRef,
      })}

      <Portal>
        <div className={getDropdownClasses()} ref={dropdownRef}>
          {menu}
        </div>
      </Portal>
    </>
  )
}

export default Dropdown
