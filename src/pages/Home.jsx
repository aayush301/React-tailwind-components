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
        <Link to={"/form"} className='text-blue-500'>Form</Link><br />
        <Link to={"/list-hover"} className='text-blue-500'>List Hover Effects</Link><br />
        <Link to={"/modal"} className='text-blue-500'>Modal</Link><br />
        <Link to={"/multistepform"} className='text-blue-500'>Multistep form</Link><br />
        <Link to={"/navbar"} className='text-blue-500'>Navbar</Link><br />
        <Link to={"/notification-badge"} className='text-blue-500'>Notification Badges</Link><br />
        <Link to={"/popover"} className='text-blue-500'>Popover</Link><br />
        <Link to={"/rating"} className='text-blue-500'>Rating</Link><br />
        <Link to={"/scrollspy"} className='text-blue-500'>Scrollspy</Link><br />
        <Link to={"/scroll-back-to-top-btn"} className='text-blue-500'>Scroll Back To Top Button</Link><br />
        <Link to={"/sidebar"} className='text-blue-500'>Sidebar</Link><br />
        <Link to={"/table"} className='text-blue-500'>Table</Link><br />
        <Link to={"/tabs"} className='text-blue-500'>Tabs</Link><br />
        <Link to={"/timeline"} className='text-blue-500'>Timeline</Link><br />
        <Link to={"/toast"} className='text-blue-500'>Toast</Link><br />
        <Link to={"/tooltip"} className='text-blue-500'>Tooltip</Link><br />
      </ul>
    </>
  )
}

export default Home