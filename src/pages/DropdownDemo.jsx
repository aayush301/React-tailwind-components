import React from 'react'
import Dropdown from '../components/Dropdown'

const DropdownDemo = () => {
  const itemClasses = "text-base py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100";

  const menu = (
    <ul className='bg-white'>
      <li> <a className={itemClasses} href="#" >Action</a > </li>
      <li> <a className={itemClasses} href="#" >Another action</a > </li>
      <li> <a className={itemClasses} href="#" >Something else here</a > </li>
    </ul>
  )

  return (
    <>
      <h1 className='m-8 text-center'>Dropdown</h1>
      <div className="ml-12">
        <Dropdown menu={menu} placement="bottom-left" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="bottom-center" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="bottom-right" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="top-left" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="top-right" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me
          </button>
        </Dropdown>

        <br /><br />

        <Dropdown menu={menu} placement="bottom-left" trigger={["click"]} isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="bottom-left" trigger={["click", "hover"]} isDismissible={false}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Hover or Click me
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="bottom-left" trigger={["hover"]} isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Hover over me
          </button>
        </Dropdown>

        <br /><br />

        <Dropdown menu={menu} placement="bottom-left" isDismissible={true}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me and then outside
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="bottom-left" isDismissible={false}>
          <button className="px-6 py-2.5 mx-2 bg-teal-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg">
            Click me and then outside
          </button>
        </Dropdown>

        <br /><br />

        <Dropdown menu={menu} placement="bottom-left" isDismissible={true}>
          <button className="mx-2 rounded-full w-8 h-8 hover:bg-gray-200 transition">
            <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
          </button>
        </Dropdown>

        <Dropdown menu={menu} placement="bottom-right" isDismissible={true}>
          <button className="mx-2 rounded-full w-8 h-8 hover:bg-gray-200 transition">
            <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
          </button>
        </Dropdown>

      </div>
    </>
  )
}

export default DropdownDemo
