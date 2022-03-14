import React from 'react'
import Navbar from '../components/Navbar'

const NavbarDemo = () => {
  return (
    <div className='relative h-screen overflow-x-hidden'>
      <Navbar />
      <div className="mt-4">
        <p>This page is made to show the demo of Responsive Navbar Component.</p>
        <p>Try resizing the page to see the responsive behaviour of Navbar.</p>
        <p>The best part is that everything is done in jsx using tailwind classes. </p>
      </div>
    </div>
  )
}

export default NavbarDemo