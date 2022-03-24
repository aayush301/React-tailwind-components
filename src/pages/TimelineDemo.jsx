import React from 'react'
import Timeline from '../components/Timeline'

const TimelineDemo = () => {
  return (
    <>
      <h1 className="m-4 text-center">Timeline</h1>
      <Timeline>
        <div className='shadow-lg p-4 bg-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam velit cum ad nulla odit totam labore quo sit aut voluptas.</div>
        <div className='shadow-lg p-4 bg-white'>Lorem, ipsum dolor.</div>
        <div className='shadow-lg p-4 bg-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quae?</div>
      </Timeline>
    </>
  )
}

export default TimelineDemo