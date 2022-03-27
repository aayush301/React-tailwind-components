import React, { useState } from 'react'
import { sidebarData } from './data';
import Submenu from './Submenu';

const SidebarWithSubmenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(state => !state);

  return (
    <>
      <div className='mx-2'>
        <span onClick={toggleSidebar} className="inline-flex w-12 h-12 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200"><i className="fa-solid fa-bars"></i></span>
      </div>

      {/* Sidebar */}
      <div className={`fixed z-10 top-0 ${isSidebarOpen ? "left-0" : "-left-full"} w-[250px] h-screen bg-white text-slate-700 transition-all duration-500 shadow-md overflow-x-auto`}>
        <div className='mx-2'>
          <span onClick={toggleSidebar} className="inline-flex w-12 h-12 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200"><i className="fa-solid fa-bars"></i></span>
        </div>

        <ul>
          {sidebarData.map((item, i) => (
            <Submenu item={item} key={i} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default SidebarWithSubmenu