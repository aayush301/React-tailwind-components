import React from 'react'
import Popover from '../components/Popover'

const PopoverDemo = () => {
  return (
    <>
      <h1 className='m-8 text-center'>Popover</h1>
      <div className="m-4">

        <Popover position={"bottom"}>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Popover on bottom
          </button>
          <div className='font-["Segoe_UI"] w-[200px] bg-white shadow-xl rounded-md'>
            <h3 className='border-b px-4 py-2'>Heading</h3>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora voluptate nam necessitatibus natus nesciunt incidunt molestias sequi autem. Quo!</p>
          </div>
        </Popover>


        <Popover position={"left"}>
          <button className="m-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Popover on left
          </button>
          <div className='font-["Segoe_UI"] w-[200px] bg-white shadow-lg rounded-md'>
            <h3 className='border-b px-4 py-2'>Heading</h3>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora voluptate nam necessitatibus natus nesciunt incidunt molestias sequi autem. Quo!</p>
          </div>
        </Popover>


        <Popover position={"right"}>
          <button className="m-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Popover on right
          </button>
          <div className='font-["Segoe_UI"] w-[200px] bg-white shadow-xl rounded-md'>
            <h3 className='border-b px-4 py-2'>Heading</h3>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora voluptate nam necessitatibus natus nesciunt incidunt molestias sequi autem. Quo!</p>
          </div>
        </Popover>

        <Popover position={"top"}>
          <button className="m-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Popover on top
          </button>
          <div className='font-["Segoe_UI"] w-[200px] bg-white shadow-xl rounded-md'>
            <h3 className='border-b px-4 py-2'>Heading</h3>
            <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora voluptate nam necessitatibus natus nesciunt incidunt molestias sequi autem. Quo!</p>
          </div>
        </Popover>

      </div>
    </>
  )
}

export default PopoverDemo