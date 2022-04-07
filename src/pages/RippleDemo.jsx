import React from 'react'
import Ripple from '../components/Ripple'

const RippleDemo = () => {
  return (
    <>
      <h1 className="m-8 text-center">Ripple</h1>
      <div className="ml-16 flex gap-4">
        <Ripple>
          <button className='px-4 py-2 transition hover:bg-gray-200'>Click me</button>
        </Ripple>

        <Ripple>
          <button className='px-4 py-2 transition bg-teal-500 text-white hover:bg-teal-600'>Click me</button>
        </Ripple>
      </div>
    </>
  )
}

export default RippleDemo