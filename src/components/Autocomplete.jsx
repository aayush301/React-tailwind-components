import React, { useEffect, useRef, useState } from 'react'

const Autocomplete = ({ placeholder, name, onChange, list, isDismissible = true }) => {

  const [open, setOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(list);
  const dropdownRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!isDismissible) return;
    document.addEventListener("click", checkAndHideDropdown);
    return () => document.removeEventListener("click", checkAndHideDropdown);
  }, [open]);


  const toggleDropdownMenu = () => {
    setOpen(open => !open);
  }

  const handleInputChange = e => {
    const val = e.target.value;
    setFilteredList(list.filter(option => option.includes(val)));
    onChange(val, name);
  };

  const handleSelect = (option) => {
    inputRef.current.value = option;
    onChange(option, name);
    setOpen(false);
  }

  const checkAndHideDropdown = e => {
    if (dropdownRef.current.contains(e.target)) return;
    setOpen(false);
  }

  const inputClasses = `w-full min-w-[150px] bg-white border border-gray-300 px-3 py-1.5 text-sm rounded-md shadow-sm whitespace-nowrap hover:shadow-md focus:shadow-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 active:shadow-md transition duration-150 ease-in-out sm:text-base`;
  const dropdownMenuClasses = `${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-2"}
    m-0 mt-1 absolute min-w-full max-h-[300px] overflow-auto z-50 bg-white border border-gray-100 transition-all duration-300 cursor-pointer rounded-lg shadow-lg`;
  const itemClasses = "text-gray-400 bg-white py-2 px-4 block w-full whitespace-nowrap hover:bg-indigo-500 hover:text-white"


  return (
    <>
      <div className="relative inline-block text-gray-500" ref={dropdownRef}>
        <input type="text" ref={inputRef} onFocus={toggleDropdownMenu} onChange={handleInputChange} className={inputClasses} placeholder={placeholder}></input>

        <div className={dropdownMenuClasses} >
          <ul>
            {filteredList.map((option, i) => (
              <li key={i} className={itemClasses} onClick={() => handleSelect(option)}>{option} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Autocomplete