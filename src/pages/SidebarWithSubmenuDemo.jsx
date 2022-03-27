import React from 'react'
import SidebarWithSubmenu from '../components/SidebarWithSubmenu/SidebarWithSubmenu'

const SidebarWithSubmenuDemo = () => {
  return (
    <>
      <SidebarWithSubmenu />
      <div className="ml-[250px]">
        <h1 className='m-8 text-center'>Sidebar with submenus</h1>
        <div>In this sidebar, Nesting is also possible</div>
      </div>
    </>
  )
}

export default SidebarWithSubmenuDemo