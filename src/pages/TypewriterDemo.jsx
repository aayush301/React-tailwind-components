import React from 'react'
import Typewriter from '../components/Typewriter'

const TypewriterDemo = () => {
  return (
    <>
      <h1 className="m-8 text-center">Typewriter</h1>
      <div className='ml-32'>
        <Typewriter staticText="Static" list={["Think", "Design", "Develop", "Release"]} />
      </div>
    </>
  )
}

export default TypewriterDemo