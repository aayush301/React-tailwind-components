import React, { useEffect, useState } from "react";

const RadioBtn = ({ label, id, name, value, checked = false, onChange }) => {
  let [isChecked, setIsChecked] = useState(checked);

  const handleRadioBtnClick = () => {
    const checkTogged = !isChecked;
    setIsChecked(checkTogged);
    onChange(name, value, checkTogged);
  };

  useEffect(() => setIsChecked(checked), [checked]);

  return (
    <>
      <label htmlFor={id} className="inline-flex items-center cursor-pointer group">
        <span className="relative w-9 h-9 p-2 rounded-full transition group-hover:bg-gray-100 dark:group-hover:bg-gray-900">
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            className="absolute peer w-full h-full top-0 left-0 opacity-0 cursor-pointer"
            onChange={handleRadioBtnClick}
          />
          <span
            className="w-5 h-5 p-[3px] z-10 absolute rounded-full border-2 border-gray-600"
            focusable="false"
            aria-hidden="true"
          >
            <span
              className={`w-2.5 h-2.5 z-20 absolute rounded-full bg-teal-600 transition-[transform]
                ${isChecked ? "scale-100 " : "scale-0"}
              `}
              focusable="false"
              aria-hidden="true"
            />
          </span>
          <span className="absolute top-0 left-0 w-full h-full rounded-full transition duration-500 scale-0 peer-active:scale-100 peer-active:bg-gray-200 peer-focus:scale-100 peer-focus:bg-gray-200 dark:peer-focus:bg-gray-900"></span>
        </span>

        <span className="select-none">{label}</span>
      </label>
    </>
  );
};

export default RadioBtn;
