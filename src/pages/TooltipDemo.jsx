import React from 'react'
import Tooltip from '../components/Tooltip'

const TooltipDemo = () => {
  return (
    <>
      <h1 className="m-8 text-center">Tooltip</h1>
      <div className="m-4 flex gap-8">

        <Tooltip text={"This is some text"} position={"top"}>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Tooltip on top
          </button>
        </Tooltip>

        <Tooltip text={"This is some text"} position={"bottom"}>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Tooltip on bottom
          </button>
        </Tooltip>

        <Tooltip text={"This is some text"} position={"left"}>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Tooltip on left
          </button>
        </Tooltip>

        <Tooltip text={"This is some text"} position={"right"}>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Tooltip on right
          </button>
        </Tooltip>
      </div>
    </>
  )
}

export default TooltipDemo