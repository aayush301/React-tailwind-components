import React, { useState } from 'react'

const Ripple = ({ children }) => {

  const [rippleActive, setRippleActive] = useState(false);
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);

  const handleMouseDown = e => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;
    setLeft(left);
    setTop(top);
    setRippleActive(true);
    setTimeout(() => {
      setRippleActive(false);
    }, 500);
  }

  return (
    <>
      <div className="relative inline-block overflow-hidden" onMouseDown={handleMouseDown}>
        {children}
        {rippleActive && (
          <span className="absolute animate-[ripple_1500ms] -translate-x-1/2 -translate-y-1/2 bg-gray-200/50 select-none rounded-full" style={{ left: `${left}px`, top: `${top}px` }}></span>
        )}
      </div>
    </>
  )
}

export default Ripple