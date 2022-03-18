import React, { useState } from 'react'

const Dropdown = ({ children }) => {

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  const dropdownButtonClasses = "flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out whitespace-nowrap";
  const dropdownArrowClasses = `ml-2 transition ${isDropdownMenuOpen ? "-rotate-180" : ""} `;
  const dropdownMenuClasses = "min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none ";
  const dropdownItemClasses = "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100";

  return (
    <>
      <div className="relative">
        <button onClick={toggleDropdownMenu} className={dropdownButtonClasses}>
          <span>Dropdown button</span>
          <span className={dropdownArrowClasses}><i className="fa-solid fa-angle-down"></i></span>
        </button>

        {isDropdownMenuOpen && (
          <ul className={dropdownMenuClasses} >
            <li> <a className={dropdownItemClasses} href="#" >Action</a > </li>
            <li> <a className={dropdownItemClasses} href="#" >Another action</a > </li>
            <li> <a className={dropdownItemClasses} href="#" >Something else here</a > </li>
          </ul>
        )}
      </div>
    </>
  )
}

export default Dropdown