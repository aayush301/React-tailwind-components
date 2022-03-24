import React from 'react'
import Dropdown from '../components/Dropdown'

const DropdownDemo = () => {
  const itemClasses = "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100";
  return (
    <>
      <h1 className='ml-12 text-xl'>Dropdown</h1>
      <div className="m-12">
        This page is made to see the demo of dropdown <br />
        Click on the dropdown button to see the effect <br /><br />

        Dismissible Dropdown <br />
        <Dropdown mainText="Click me">
          <ul>
            <li> <a className={itemClasses} href="#" >Action</a > </li>
            <li> <a className={itemClasses} href="#" >Another action</a > </li>
            <li> <a className={itemClasses} href="#" >Something else here</a > </li>
          </ul>
        </Dropdown>
        <br /><br /><br />

        Non-Dismissible Dropdown <br />
        <Dropdown mainText="Click me as well" isDismissible={false}>
          <ul>
            <li> <a className={itemClasses} href="#" >Home</a > </li>
            <li> <a className={itemClasses} href="#" >Services</a > </li>
            <li> <a className={itemClasses} href="#" >About</a > </li>
          </ul>
        </Dropdown>

      </div>
    </>
  )
}

export default DropdownDemo