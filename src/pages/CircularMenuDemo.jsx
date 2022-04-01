import React from 'react'
import CircularMenu from '../components/CircularMenu'

const items = [
  <span className="rounded-full bg-rose-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-rose-600" onClick={() => alert("Clicked user")}>
    <i className="fa-solid fa-user"></i>
  </span>,

  <span className="rounded-full bg-rose-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-rose-600">
    <i className="fa-solid fa-magnifying-glass"></i>
  </span>,

  <span className="rounded-full bg-rose-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-rose-600">
    <i className="fa-solid fa-message"></i>
  </span>,

  <span className="rounded-full bg-rose-500 text-white w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-rose-600">
    <i className="fa-solid fa-bell"></i>
  </span>,
];

const CircularMenuDemo = () => {
  return (
    <>
      <h1 className='m-8 text-center'>Circular Menu</h1>
      <div className='m-32 flex flex-row gap-32'>
        <CircularMenu>
          {items}
        </CircularMenu>

        <CircularMenu radius={100}>
          {items}
        </CircularMenu>

        <CircularMenu startAngle={0} endAngle={180} endAngleInclusive={true}>
          {items}
        </CircularMenu>

        <CircularMenu startAngle={-60} endAngle={-120} endAngleInclusive={true}>
          {items}
        </CircularMenu>
      </div>
    </>
  )
}

export default CircularMenuDemo