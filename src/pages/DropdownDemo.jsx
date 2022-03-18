import React from 'react'
import Dropdown from '../components/Dropdown'

const DropdownDemo = () => {
  return (
    <>
      <h1 className='ml-12 text-xl'>Dropdown</h1>
      <div className="m-12">
        <div className='mb-4'>This page is made to see the demo of dropdown</div>
        <Dropdown />
        <div className='mt-4'>Click on the dropdown button to see the effect</div>
      </div>
    </>
  )
}

export default DropdownDemo