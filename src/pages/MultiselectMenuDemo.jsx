import React, { useEffect, useState } from 'react'
import MultiselectMenu from '../components/MultiselectMenu'

const list = [
  {
    label: "one",
    value: 1,
  },
  {
    label: "two",
    value: 2,
  },
  {
    label: "three",
    value: 3,
  },
];



const MultiselectMenuDemo = () => {
  const [formData, setFormData] = useState({ name: "", nums: [] });
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSelectChange = (items, name) => {
    setFormData(formData => ({ ...formData, [name]: items }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Nums: ${formData.nums.join(",")}`);
  }

  return (
    <>
      <h1 className='m-4 text-center'>Custom Multiselect menu</h1>
      <div className='m-16'>
        <div className='m-4'>
          <input type="text" name="name" className='border-2 text-gray-700 focus:border-indigo-500 focus:outline-none px-2 py-2 rounded-md' onChange={handleChange} placeholder='Name...' />
        </div>
        <div className='m-4'>
          <MultiselectMenu title="Select numbers" name="nums" list={list} onChange={handleSelectChange} />
        </div>
        <button className='m-4 bg-indigo-500 text-white p-2 rounded-sm' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default MultiselectMenuDemo