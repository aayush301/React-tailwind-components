import React, { useEffect, useState } from "react";

const Checkbox = ({ label, id, name, value, checked = false, indeterminate = false, onChange }) => {
  let [isChecked, setIsChecked] = useState(checked);
  const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);
  const handleCheckboxClick = () => {
    setIsIndeterminate(false);
    setIsChecked(!isChecked);
  };

  useEffect(() => setIsChecked(checked), [checked]);
  useEffect(() => setIsIndeterminate(indeterminate), [indeterminate]);
  useEffect(() => {
    if (isIndeterminate) return;
    onChange(name, value, isChecked);
  }, [isChecked, isIndeterminate, name, value, onChange]);

  return (
    <>
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <span className="relative w-10 h-10 p-2 rounded-full transition hover:bg-gray-100">
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            className="absolute peer w-full h-full top-0 left-0 opacity-0 cursor-pointer"
            onChange={handleCheckboxClick}
          />
          {isIndeterminate ? (
            <svg
              className="w-6 h-6 absolute z-10 fill-teal-600"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
            </svg>
          ) : isChecked ? (
            <svg
              className="w-6 h-6 absolute z-10 fill-teal-600"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 absolute z-10 fill-gray-700"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              {" "}
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
            </svg>
          )}
          <span className="absolute top-0 left-0 w-full h-full rounded-full transition duration-500 scale-0 peer-active:scale-100 peer-active:bg-gray-200 peer-focus:scale-100 peer-focus:bg-gray-200"></span>
        </span>

        <span>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;
