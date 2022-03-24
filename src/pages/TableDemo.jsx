import React from 'react'
import Table from '../components/Table'

const data = [
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    roll: 10,
    a: "a",
    b: "a",
    c: "a",
    d: "a",
  },
  {
    name: "Sohan",
    email: "han@gmail.com",
    roll: 5
  },
  {
    name: "Mohan",
    email: "mohan@gmail.com",
    roll: 6
  },
  {
    name: "Mohan",
    email: "mohan@gmail.com",
    roll: 6
  },
  {
    name: "Mohan",
    email: "mohan@gmail.com",
    roll: 6
  },
];


const TableDemo = () => {
  return (
    <>
      <div>
        <h1 className='m-8 text-center'>Tables</h1>
        <div className="p-8 bg-gray-100">
          <div className='mx-auto w-fit max-w-lg h-fit max-h-[400px] overflow-auto shadow-md bg-white'>
            <Table data={data} keys={["name", "email", "roll", "d", "a", "b", "c"]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TableDemo