import React, { useState } from "react";
import SelectMenu from "../components/SelectMenu";

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

const SelectMenuDemo = () => {
  const [formData, setFormData] = useState({ name: "", num: "" });
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (item, name) => {
    setFormData({ ...formData, [name]: item });
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Num: ${formData.num}`);
  };

  return (
    <>
      <h1 className="m-4 text-center">Custom select menu</h1>
      <div className="m-16">
        <div className="m-4">
          <input
            type="text"
            name="name"
            className="border-2 text-gray-700 focus:border-indigo-500 focus:outline-none px-2 py-2 rounded-md"
            onChange={handleChange}
            placeholder="Name..."
          />
        </div>
        <div className="w-[300px] m-4">
          <SelectMenu title="Select a number" name="num" list={list} onChange={handleSelectChange} />
        </div>
        <button className="m-4 bg-indigo-500 text-white p-2 rounded-sm" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default SelectMenuDemo;
