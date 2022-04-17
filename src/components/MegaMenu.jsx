import React, { useState } from 'react'

const items = [
  {
    key: "mathematics",
    title: "Mathematics",
    subItems: ["Algebra", "Arithmetic", "Calculus", "Differential Equations", "Discrete Math", "Graph", "Linear Algebra", "Number Theory", "Probability", "statistics", "Trigonometry", "Numerical Analysis"],
  },
  {
    key: "programming",
    title: "Programming",
    subItems: [".NET", "C++", "HTML / CSS", "Go", "Java", "Javascript", "Programming", "Python", "Ruby", "Rust", "Swift", "Typescript", "Website Design"],
  },
  {
    key: "science",
    title: "Science",
    subItems: ["Agriculture", "Anatomy", "Applied Physics", "Astrobiology", "Astronomy", "Astrophysics", "Biochemistry", "Biology", "Botany", "Chemistry", "Earth and Space Exploration", "Ecology", "Environmental Science", "Geology", "Microbiology", "Physics", "Science", "Zoology"]
  },
  {
    key: "engineering",
    title: "Engineering",
    subItems: ["Aeronautical Management", "Aerospace Engineering", "Chemical Enginnering", "Civil Engineering", "Computer Engineering", "Environmental Engineering", "Information Technology", "Mathematics and Computing", "Mechanical Engineering", "Software Engineering",]
  },

];

const MegaMenu = () => {

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className='flex flex-row bg-white text-gray-700 shadow-sm'>
        <div className='relative bg-white h-full'>
          <button className='h-full px-4 py-3 hover:text-blue-500 cursor-pointer' onClick={() => setActiveMenu(!activeMenu)}>
            <span>All Subjects</span>
            <span className='ml-2'><i className="fa-solid fa-angle-down"></i></span>
          </button>

          <div className={`absolute flex h-[300px] border-t border-t-gray-700 bg-white py-2 rounded-b-md shadow-xl ${!activeMenu ? "hidden" : ""}`}>
            <ul>
              {items.map(item => (
                <li key={item.key} onClick={() => setActiveItem(item.key)} className={`flex justify-between w-52 px-4 py-1 hover:text-blue-500 cursor-pointer ${activeItem == item.key ? "bg-gray-200" : ""}`}>
                  <span>{item.title}</span>
                  <span><i className="fa-solid fa-angle-right"></i></span>
                </li>
              ))}
            </ul>

            <ul className={`flex flex-col md:flex-wrap md:w-[600px] overflow-auto ${!activeItem ? "hidden" : ""}`}>
              {items.find(item => item.key == activeItem)?.subItems?.map(subItem => (
                <li key={subItem} className='px-4 py-1 cursor-pointer hover:text-blue-500'>{subItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MegaMenu