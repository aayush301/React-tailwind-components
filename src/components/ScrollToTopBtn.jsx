import React, { useEffect, useState } from 'react'

const ScrollToTopBtn = () => {

  const [visible, setVisible] = useState(false);
  window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button onClick={scrolltoTop} className={`${!visible && "hidden"} w-10 h-10 fixed bottom-5 right-5 inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`} >
        <span><i className="fa-solid fa-arrow-up fa-lg"></i></span>
      </button>
    </>
  )
}

export default ScrollToTopBtn