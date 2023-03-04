import React from 'react'
import TreeView from '../components/TreeView'

const data = [
  {
    title: "Item 0",
    key: "0",
    children: [
      {
        title: "Item 00",
        key: "0-0"
      },
      {
        title: "Item 01",
        key: "0-1"
      },
    ]
  },

  {
    title: "Item 1",
    key: "1",
    children: [
      {
        title: "Item 10",
        key: "1-0",
        children: [
          {
            title: "Item 100",
            key: "1-0-0"
          },
          {
            title: "Item 101",
            key: "1-0-1"
          },
          {
            title: "Item 102",
            key: "1-0-2"
          },
        ]
      },
      {
        title: "Item 11",
        key: "1-1"
      },
    ]
  },

  {
    title: "Item 2",
    key: "2"
  }

];



const TreeViewDemo = () => {
  return (
    <>
      <h1 className='m-8 text-center'>Tree View</h1>
      <div className="ml-8">
        Example1
        <div className="w-[500px] max-h-[700px] overflow-auto">
          <TreeView data={data} />
        </div>

        <div className="w-full h-0.5 my-4 bg-gray-300"></div>

        Example2 (Expanded Items: 0, 10)
        <div className="w-[500px] max-h-[700px] overflow-auto">
          <TreeView data={data} defaultExpandedKeys={["0", "1-0"]} />
        </div>
      </div>
    </>
  )
}

export default TreeViewDemo