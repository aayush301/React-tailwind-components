import React, { useState } from 'react'
import Autocomplete from '../components/Autocomplete'

const list = ["apple", "mango", "banana", "grapes"];


const AutocompleteDemo = () => {

  const [formData, setFormData] = useState({ fruit: "" });
  const handleSelectChange = (item, name) => {
    setFormData({ ...formData, [name]: item });
  }
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Fruit: ${formData.fruit}`);
  }

  return (
    <>
      <h1 className='m-8 text-center'>Autocomplete</h1>
      <div className="m-16">
        <div className='m-4'>
          <label htmlFor="">Enter a fruit </label>
          <Autocomplete placeholder="Write a fruit.." name="fruit" list={list} onChange={handleSelectChange} />
        </div>
        <button className='m-4 bg-indigo-500 text-white p-2 rounded-sm' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default AutocompleteDemo