import React from 'react'
import Scrollspy from '../components/Scrollspy'

const ScrollspyDemo = () => {
  return (
    <>
      <div className='text-center m-8'>
        <h1>Scrollspy</h1>
        <p>This scrollspy is responsive as well. So please try resizing the page as well to try this out.</p>
      </div>
      <Scrollspy />
    </>
  )
}

export default ScrollspyDemo