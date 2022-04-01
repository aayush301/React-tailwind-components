import React, { useState } from 'react'
import Progress from '../components/Progress'

const ProgressDemo = () => {
  const [linearPercent, setLinearPercent] = useState(0);
  const [circularPercent, setCircularPercent] = useState(0);

  return (
    <>
      <h1 className="m-8 text-center">Progress</h1>
      <div className="ml-24">
        <div className="m-">
          <Progress type="linear" percent={linearPercent} />
          <button onClick={() => setLinearPercent(linearPercent + 20)} className='w-8 h-8 mx-4 my-3 bg-gray-300 hover:bg-gray-200'>+</button>
          <button onClick={() => setLinearPercent(linearPercent - 20)} className='w-8 h-8 mx-4 my-3 bg-gray-300 hover:bg-gray-200'>-</button>
        </div>

        <div className='m-4'>
          <Progress type="circular" percent={circularPercent} />
          <button onClick={() => setCircularPercent(circularPercent + 20)} className='w-8 h-8 mx-4 my-3 bg-gray-300 hover:bg-gray-200'>+</button>
          <button onClick={() => setCircularPercent(circularPercent - 20)} className='w-8 h-8 mx-4 my-3 bg-gray-300 hover:bg-gray-200'>-</button>
        </div>
      </div>
    </>
  )
}

export default ProgressDemo