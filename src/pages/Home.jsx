import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <ul>
        <Link to={"/navbar"} className='text-blue-500'>Navbar</Link><br />
        <Link to={"/sidebar"} className='text-blue-500'>Sidebar</Link><br />
        <Link to={"/dropdown"} className='text-blue-500'>Dropdown</Link><br />
      </ul>
    </>
  )
}

export default Home