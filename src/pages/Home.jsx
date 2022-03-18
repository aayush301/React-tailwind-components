import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <ul className='m-auto w-max mt-[100px]'>
        <Link to={"/accordion"} className='text-blue-500'>Accordion</Link><br />
        <Link to={"/alerts"} className='text-blue-500'>Alerts</Link><br />
        <Link to={"/carousel"} className='text-blue-500'>Carousel</Link><br />
        <Link to={"/chips"} className='text-blue-500'>Chips</Link><br />
        <Link to={"/dropdown"} className='text-blue-500'>Dropdown</Link><br />
        <Link to={"/multistepform"} className='text-blue-500'>Multistep form</Link><br />
        <Link to={"/navbar"} className='text-blue-500'>Navbar</Link><br />
        <Link to={"/notification-badge"} className='text-blue-500'>Notification Badges</Link><br />
        <Link to={"/popover"} className='text-blue-500'>Popover</Link><br />
        <Link to={"/rating"} className='text-blue-500'>Rating</Link><br />
        <Link to={"/scrollspy"} className='text-blue-500'>Scrollspy</Link><br />
        <Link to={"/scroll-back-to-top-btn"} className='text-blue-500'>Scroll Back To Top Button</Link><br />
        <Link to={"/sidebar"} className='text-blue-500'>Sidebar</Link><br />
        <Link to={"/tabs"} className='text-blue-500'>Tabs</Link><br />
      </ul>
    </>
  )
}

export default Home