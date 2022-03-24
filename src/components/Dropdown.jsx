import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({ mainText, children, isDismissible = true }) => {

  const [open, setOpen] = useState(false);
  const toggleDropdownMenu = () => {
    setOpen(open => !open);
  }
  const dropdownRef = useRef();

  const dropdownButtonClasses = "flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out whitespace-nowrap";
  const dropdownArrowClasses = `ml-2 transition ${open ? "-rotate-180" : ""} `;
  const dropdownMenuClasses = `${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-2"}
    min-w-full absolute bg-white text-base z-50 py-2 text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding  border-[1px] border-gray-100 transition-all duration-300`;

  const checkAndHideDropdown = e => {
    if (dropdownRef.current.contains(e.target)) return;
    setOpen(false);
  }
  useEffect(() => {
    if (!isDismissible) return;
    document.addEventListener("click", checkAndHideDropdown);
    return () => document.removeEventListener("click", checkAndHideDropdown);
  }, [open]);

  return (
    <>
      <div className="relative inline-block" ref={dropdownRef}>
        <button onClick={toggleDropdownMenu} className={dropdownButtonClasses}>
          <span>{mainText}</span>
          <span className={dropdownArrowClasses}><i className="fa-solid fa-angle-down"></i></span>
        </button>

        <div className={dropdownMenuClasses} >
          {children}
        </div>
      </div>
    </>
  )
}

export default Dropdown