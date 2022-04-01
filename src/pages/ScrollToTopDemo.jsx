import React from 'react'
import ScrollToTopBtn from '../components/ScrollToTopBtn'

const ScrollToTopDemo = () => {
  return (
    <>
      <ScrollToTopBtn />
      <div className="mt-4 text-center text-gray-800 h-[2000px]">
        <h1>Scroll Back To top Button Demo</h1>
        <p className="mb-4">
          Start scrolling the page and a strong <strong>"Back to top" button </strong> will appear
          in the <strong>bottom right corner</strong> of the screen.
        </p>
        <p>Click this button and you will be taken to the top of the page.</p>
      </div>
    </>
  )
}

export default ScrollToTopDemo