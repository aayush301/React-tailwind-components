import React, { useState } from 'react'

const Popover = ({ children, position, className }) => {

  position = position || "bottom";
  const [isOpen, setIsOpen] = useState(false);

  const popoverStyle = () => (
    position == "top" ? ({ bottom: "calc(100% + 10px)" }) :
      position == "bottom" ? ({ top: "calc(100% + 10px)" }) :
        position == "left" ? ({ right: "calc(100% + 10px)" }) :
          position == "right" ? ({ left: "calc(100% + 10px)" }) : ({})
  )

  const popoverClasses = `absolute z-50 border
    ${position == "top" && "left-1/2 -translate-x-1/2 after:absolute after:content-[''] after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-t-white"}
    ${position == "bottom" && "left-1/2 -translate-x-1/2 after:absolute after:content-[''] after:left-1/2 after:bottom-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-b-white"}
    ${position == "left" && "top-1/2 -translate-y-1/2 after:absolute after:content-[''] after:top-1/2 after:left-full after:-translate-y-1/2 after:border-[10px] after:border-transparent after:border-l-white"}
    ${position == "right" && "top-1/2 -translate-y-1/2 after:absolute after:content-[''] after:top-1/2 after:right-full after:-translate-y-1/2 after:border-[10px] after:border-transparent after:border-r-white"}
  `;

  return (
    <>
      <div className={`inline-block relative ${className}`}>
        <div onClick={() => setIsOpen(!isOpen)} >
          {children[0]}
        </div>

        {isOpen && (
          <div style={popoverStyle()} className={popoverClasses}>
            {children[1]}
          </div>
        )}
      </div>
    </>
  )
}

export default Popover