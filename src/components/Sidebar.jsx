import React, { useState } from 'react'

const Sidebar = () => {

  const liClasses = "px-4 py-2 cursor-pointer hover:bg-slate-100";
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth < 730 ? false : true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }


  return (
    <>
      <div className={`fixed bg-white py-4 h-screen border-r-2 transition-all ${isSidebarOpen ? "w-60 shadow md:shadow-none" : "w-16"}`}>
        <div className='mx-2'>
          <span onClick={toggleSidebar} className="inline-flex w-12 h-12 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200"><i className="fa-solid fa-bars"></i></span>
        </div>

        <ul className='my-4 whitespace-nowrap overflow-x-hidden'>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-code"></i></span>
            <span>Code</span>
          </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-message"></i></span>
            <span>Messages</span>
          </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-pen"></i></span>
            <span>Write</span>
          </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-user"></i></span>
            <span>User</span>
          </li>
        </ul>
      </div>

      {/* Empty div for pushing main content to right according to the width of the sidebar */}
      <div className={`flex-shrink-0 h-screen w-16 ${isSidebarOpen && "md:w-60"}`}>
      </div>
    </>
  )
}

export default Sidebar