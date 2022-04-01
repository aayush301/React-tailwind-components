import React, { useEffect, useState } from 'react'

const CircularRotatingList = ({ items }) => {

  const [activeItem, setActiveItem] = useState(0);

  const angle = -360 / (items.length);
  const radius = 200;
  const startAngle = -angle * activeItem;

  const handleClick = (i) => {
    setActiveItem(i);
  }

  useEffect(() => {
    const id = window.setInterval(() => { setActiveItem((activeItem + 1) % items.length) }, 4000);
    return () => window.clearInterval(id);
  }, [activeItem]);


  return (
    <>
      <div className="relative w-[500px] h-[500px] bg-blue-200 flex justify-center items-center">
        <div className='w-[250px] h-[300px] text-center flex items-center'>{items[activeItem].text}</div>
        <div className="absolute rounded-full border border-black border-dashed w-[400px] h-[400px]"></div>
        <ul>
          {items.map((item, i) => (
            <li key={i} className='z-10 absolute top-1/2 left-1/2 -mx-8 -my-8 transition duration-1000' style={{ transform: `rotate(${startAngle + i * angle}deg) translateY(-${radius}px) rotate(${-(startAngle + i * angle)}deg)` }} onClick={() => handleClick(i)}>
              <span className="rounded-xl bg-rose-500 text-white w-16 h-16 flex justify-center items-center cursor-pointer hover:bg-rose-600">
                {item.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CircularRotatingList