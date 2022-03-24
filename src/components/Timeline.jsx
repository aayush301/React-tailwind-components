import React from 'react'

const Timeline = ({ children }) => {

  // connector is from center
  const connectorWidth = "2.5rem";
  const connectorStyles = (index) => ({
    position: "absolute",
    transform: "translateY(1rem)",
    width: connectorWidth,
    height: "0.25rem",
    background: "#F43F5E",
    left: ((index & 1) == 0) ? "50%" : "",
    right: ((index & 1) == 1) ? "50%" : "",
  });

  const boxStyles = (index) => ({
    width: "40%",
    position: "relative",
    left: "50%",
    transform: ((index & 1) == 0) ? `translateX(${connectorWidth})` : `translateX(calc(-100% - ${connectorWidth}))`,
  })

  return (
    <>
      <div className='relative py-8 px-2 m-4 shadow-xl bg-gray-100'>
        <div className="absolute left-1/2 top-0 w-[3px] h-full bg-blue-500"></div>

        {children.map((child, index) => (
          <div className='relative w-full mb-4' key={index}>
            <div className="absolute rounded-full w-[32px] h-[32px] z-50 bg-teal-500 text-white left-1/2 -translate-x-1/2 flex items-center justify-center">
              <span>{index + 1}</span>
            </div>
            <div style={connectorStyles(index)}></div>
            <div style={boxStyles(index)}>{child}</div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Timeline