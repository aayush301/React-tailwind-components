import React, { useRef } from 'react'
import Sidebar from '../components/Sidebar'

const SidebarDemo = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-grow overflow-auto p-4">
          <p>This page is made to show the demo of Responsive Sidebar Component.</p>
          <p>Try resizing the page to see the responsive behaviour of Sidebar.</p>
          <p>The best part is that everything is done in jsx using tailwind classes. </p>
        </div>
      </div>

    </>
  )
}

export default SidebarDemo