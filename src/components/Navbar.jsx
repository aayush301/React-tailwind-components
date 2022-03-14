import React, { useState } from 'react'

const Navbar = () => {
  const liClasses = 'py-2 px-3 cursor-pointer hover:bg-[#c1d4da] transition rounded-sm';
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <>
      <header className='flex justify-between p-4 shadow-md items-center'>
        <h2 className='cursor-pointer uppercase font-bold'>React Tailwind</h2>
        <div className='hidden md:flex items-center gap-2 w-64 bg-[#e8eaf1] px-4 py-2 rounded-sm'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className='flex-grow bg-inherit focus:outline-0' placeholder='Search...' />
        </div>
        <ul className='hidden md:flex gap-4 uppercase font-medium'>
          <li className={liClasses}>Home</li>
          <li className={liClasses}>About</li>
          <li className={liClasses}>Services</li>
          <li className={liClasses}>Gallery</li>
        </ul>
        <span className='md:hidden cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>


        {/* Navbar displayed as sidebar on smaller screens */}
        <div className={`absolute md:hidden right-0 top-0 transition ${(isNavbarOpen == true) ? 'translate-x-0' : 'translate-x-full'} bg-[#f5fffa] shadow-md w-full sm:w-9/12 h-full`}>
          <div className='flex'>
            <span className='m-4 ml-auto cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-xmark"></i></span>
          </div>
          <div className='flex items-center w-9/12 gap-2 mx-auto mb-4 bg-[#e8eaf1] px-4 py-2 rounded-sm'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className='flex-grow bg-inherit focus:outline-0' placeholder='Search...' />
          </div>
          <ul className='flex flex-col gap-4 uppercase font-medium text-center'>
            <li className={liClasses}>Home</li>
            <li className={liClasses}>About</li>
            <li className={liClasses}>Services</li>
            <li className={liClasses}>Gallery</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar