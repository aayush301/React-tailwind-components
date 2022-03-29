import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1 className='text-center text-xl shadow-sm p-4'>React Tailwind Components</h1>
      <ul className='m-auto mt-2 flex flex-col content-evenly gap-1 flex-wrap bg-gray-100 p-8 max-h-[500px] text-gray-600'>
        {[
          { path: "/accordion", label: "Accordion" },
          { path: "/alerts", label: "Alerts" },
          { path: "/carousel", label: "Carousel" },
          { path: "/checkbox", label: "Checkbox" },
          { path: "/chips", label: "Chips" },
          { path: "/dropdown", label: "Dropdown" },
          { path: "/form", label: "Form" },
          { path: "/list-hover", label: "List hover Effects" },
          { path: "/modal", label: "Modal" },
          { path: "/multiselect-menu", label: "Multiselect Menu" },
          { path: "/multistepform", label: "Multistep form" },
          { path: "/navbar", label: "Navbar" },
          { path: "/notification-badge", label: "Notification Badges" },
          { path: "/popover", label: "Popover" },
          { path: "/rating", label: "Rating" },
          { path: "/scrollspy", label: "Scrollspy" },
          { path: "/scroll-back-to-top-btn", label: "Scroll Back To Top Button" },
          { path: "/select-menu", label: "Select Menu" },
          { path: "/sidebar", label: "Sidebar" },
          { path: "/sidebar-with-submenu", label: "Sidebar with sub-menu" },
          { path: "/table", label: "Table" },
          { path: "/tabs", label: "Tabs" },
          { path: "/timeline", label: "Timeline" },
          { path: "/toast", label: "Toast" },
          { path: "/tooltip", label: "Tooltip" },
        ].map(({ path, label }) => (
          <Link to={path} key={path} className="self-start transition hover:text-indigo-600"> {label} </Link>
        ))}
      </ul>
    </>
  )
}

export default Home