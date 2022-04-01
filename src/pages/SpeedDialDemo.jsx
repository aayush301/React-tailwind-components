import React from 'react'
import SpeedDial from '../components/SpeedDial'

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

const SpeedDialDemo = () => {
  return (
    <>
      <h1 className="m-8 text-center">Speed Dial</h1>
      <div className='m-32 flex flex-row gap-32'>
        <SpeedDial direction="up">
          {items}
        </SpeedDial>

        <SpeedDial direction='down'>
          {items}
        </SpeedDial>

        <SpeedDial direction='left'>
          {items}
        </SpeedDial>

        <SpeedDial direction='right'>
          {items}
        </SpeedDial>
      </div>
    </>
  )
}

export default SpeedDialDemo