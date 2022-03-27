import React, { useEffect, useRef, useState } from 'react'

const SelectMenu = ({ title, name, onChange, list, isDismissible = true }) => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    if (!isDismissible) return;
    document.addEventListener("click", checkAndHideDropdown);
    return () => document.removeEventListener("click", checkAndHideDropdown);
  }, [open]);


  const toggleDropdownMenu = () => {
    setOpen(open => !open);
  }

  const handleSelect = (option) => {
    onChange(option.value, name);
    setSelected(option);
    setOpen(false);
  }

  const checkAndHideDropdown = e => {
    if (dropdownRef.current.contains(e.target)) return;
    setOpen(false);
  }

  const dropdownButtonClasses = `flex items-center justify-between w-full min-w-[150px] bg-white border border-gray-300 px-3 py-2.5 text-sm rounded-md shadow-sm whitespace-nowrap hover:shadow-md focus:shadow-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 active:shadow-md transition duration-150 ease-in-out sm:text-base`;
  const dropdownArrowClasses = `ml-2 transition ${open ? "-rotate-180" : ""} `;
  const dropdownMenuClasses = `${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-2"}
    m-0 mt-1 absolute min-w-full max-h-[300px] overflow-auto z-50 py-2 bg-white border-[1px] border-gray-100 transition-all duration-300 cursor-pointer rounded-lg shadow-lg`;
  const itemClasses = (option) => (
    `${option == selected ? "text-indigo-600 font-bold" : "text-gray-400"} bg-white py-2 px-4 block w-full whitespace-nowrap hover:bg-indigo-500 hover:text-white`
  );


  return (
    <>
      <div className="relative inline-block text-gray-500" ref={dropdownRef}>
        <button onClick={toggleDropdownMenu} className={dropdownButtonClasses}>
          <span>{selected ? selected.label : title}</span>
          <span className={dropdownArrowClasses}><i className="fa-solid fa-angle-down"></i></span>
        </button>

        <div className={dropdownMenuClasses} >
          <ul>
            {list.map((option, i) => (
              <li key={i} className={itemClasses(option)} onClick={() => handleSelect(option)}>{option.label} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SelectMenu