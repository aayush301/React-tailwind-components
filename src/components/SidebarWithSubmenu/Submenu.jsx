import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Submenu = ({ item, paddingLeft = 10 }) => {
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);
  const toggleSubnav = () => setIsSubnavOpen(state => !state);

  return (
    <>
      <li className='list-none'>
        <Link to={item.path} onClick={item.subNav && toggleSubnav} style={{ paddingLeft: paddingLeft }} className='flex justify-between p-3 hover:bg-gray-200 transition'>
          <div className='shrink-0'>
            <span className='w-5 inline-block text-center'>{item.icon}</span>
            <span className='ml-2'>{item.title}</span>
          </div>
          <span className={`transition ${isSubnavOpen ? "rotate-180" : ""}`}>
            {item.subNav ? (<i className="fa-solid fa-angle-down"></i>) : null}
          </span>
        </Link>

        <ul className={`${isSubnavOpen ? "h-auto max-h-[1000px]" : "max-h-0"} transition-all duration-300 overflow-y-hidden`}>
          {item.subNav && item.subNav.map((item, i) => (
            <Submenu item={item} paddingLeft={paddingLeft + 20} key={i} />
          ))}
        </ul>
      </li>
    </>
  )
}

export default Submenu