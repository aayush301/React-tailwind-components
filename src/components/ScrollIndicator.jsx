import React, { useEffect, useState } from 'react'

const ScrollIndicator = () => {

  const [scrollTopPercent, setScrollTopPercent] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercent = (winScroll / height) * 100;
    setScrollTopPercent(scrolledPercent);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='sticky top-0 left-0 right-0 z-10 h-2 bg-black'>
        <div className='h-full bg-indigo-400' style={{ width: `${scrollTopPercent}%` }}></div>
      </div>
    </>
  )
}

export default ScrollIndicator