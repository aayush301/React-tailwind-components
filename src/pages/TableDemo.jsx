import React from 'react'
import Table from '../components/Table'

const keys = ["name", "email", "roll",];
const data = [
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    roll: 10,
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
          <div className='mx-auto w-fit max-w-[600px] h-fit max-h-[400px] overflow-auto shadow-md bg-white rounded-sm'>
            <Table data={data} keys={keys} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TableDemo