import React, { useEffect, useRef, useState } from 'react'

/**
 * @param list: arr of objs {label, value}
 */
const SelectMenu = ({ title, name, id, value, list, onChange, isDismissible = true }) => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    if (value) setSelected(list.find(ob => ob.value === value));
  }, [value]);

  useEffect(() => {
    if (!isDismissible) return;
    document.addEventListener("click", checkAndHideDropdown);
    return () => document.removeEventListener("click", checkAndHideDropdown);
  }, [open]);


  const toggleDropdownMenu = () => {
    setOpen(open => !open);
  }

  const handleSelect = (option) => {
    onChange(option.value, name);
    setSelected(option);
    setOpen(false);
  }

  const checkAndHideDropdown = e => {
    if (!dropdownRef.current || dropdownRef.current.contains(e.target)) return;
    setOpen(false);
  }

  const dropdownArrowClasses = `transition ${open ? "-rotate-180" : ""}`;
  const dropdownMenuClasses = ` ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-2"}`;
  const itemClasses = (option) => (
    `${selected && option.value == selected.value ? "text-sky-600" : "text-gray-600"} px-4 py-2 hover:bg-sky-50 hover:text-sky-600`
  );


  return (
    <>
      <div className="relative inline-block w-full" ref={dropdownRef}>
        <button onClick={toggleDropdownMenu} id={id} className="flex justify-between w-full mt-2 px-3 py-2 text-gray-500 rounded-[4px] border-2 border-gray-100 active:border-sky-500 focus:border-sky-500 outline-none transition">
          <span>{selected ? selected.label : title}</span>
          <span className={dropdownArrowClasses}><i className="fa-solid fa-angle-down"></i></span>
        </button>

        <div className={"absolute z-10 min-w-full w-max max-h-[250px] overflow-auto bg-white shadow-md cursor-pointer rounded-lg py-2 transition duration-300 " + dropdownMenuClasses} >
          <ul>
            {list.map((option, i) => (
              <li key={i} className={itemClasses(option)} onClick={() => handleSelect(option)}>{option.label} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SelectMenu