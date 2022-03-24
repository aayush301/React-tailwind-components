import React from 'react'

const ListHoverDemo = () => {

  const listItems = [
    "First item",
    "This is second item with large contents.........Just like that",
    "This one is third item",
  ];

  return (
    <>
      {/* Instead of using group and group-hover class of tailwindcss, we can also use hover events:onMouseEnter and onMouseLeave and maintain one state for current item */}
      <div className="m-4">
        <h1 className='mb-12 text-center'>List Hover Effects</h1>
        <div>
          <ul className='flex flex-col gap-4 p-4 m-4 bg-gray-100 w-[500px] overflow-hidden rounded-md shadow-md'>
            {listItems.map((listItem, index) => (
              <li key={index} className='group relative px-4 py-2 w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer transition hover:bg-gray-300'>
                <span className='whitespace-nowrap'>{listItem}</span>
                <span className={`absolute right-0 top-1/2 -translate-y-1/2 hidden group-hover:flex gap-1 bg-gray-300 px-4`}>
                  <span className='hover:bg-gray-400 w-8 h-8 flex items-center justify-center rounded-full transition'><i className="fa-solid fa-edit"></i></span>
                  <span className='hover:bg-gray-400 w-8 h-8 flex items-center justify-center rounded-full transition'><i className="fa-solid fa-trash"></i></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ListHoverDemo