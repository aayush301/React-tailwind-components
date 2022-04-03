import React, { useState } from 'react'

const TreeItem = ({ level, treeItem, expandedKeys }) => {

  const toExpand = expandedKeys.includes(treeItem.key);
  const [expand, setExpand] = useState(toExpand);

  return (
    <>
      <li className='w-full mt-2'>
        <div className='flex'>
          <div style={{ width: `${level * 20}px` }}></div>
          <div className="flex grow py-0.5 px-2 cursor-pointer transition hover:bg-gray-200" onClick={() => setExpand(!expand)}>
            <span className='w-4'>{treeItem.children && (<i className={`fa-solid fa-angle-right ${expand ? "rotate-90" : ""} transition duration-300`}></i>)}</span>
            <span>{treeItem.title}</span>
          </div>
        </div>

        {treeItem.children && (
          <ul className={`${expand ? "h-auto max-h-[500px]" : "max-h-0"} transition-all duration-500 overflow-y-hidden`}>
            {treeItem.children.map(item => (
              <TreeItem key={item.key} level={level + 1} treeItem={item} expandedKeys={expandedKeys} />
            ))}
          </ul>
        )}
      </li>
    </>
  )
}

export default TreeItem