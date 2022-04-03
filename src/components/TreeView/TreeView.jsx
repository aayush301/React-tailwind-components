import React from 'react'
import TreeItem from './TreeItem'

const TreeView = ({ data, expandedKeys = [] }) => {
  return (
    <>
      <ul className='w-full'>
        {data.map((item) => (
          <TreeItem key={item.key} level={0} treeItem={item} expandedKeys={expandedKeys} />
        ))}
      </ul>
    </>
  )
}

export default TreeView