import React, { useEffect, useState } from "react";

const Thumb = ({ disabled, disableRipple, active, styles }) => {
  return (
    <>
      <div
        className={`relative w-4 h-4 rounded-full transition shadow-lg
          ${!disabled ? "bg-violet-600 hover:bg-violet-700 active:bg-violet-800" : "bg-gray-600"}`}
        style={{ ...styles.thumb }}
      >
        <div
          className={`absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/30 transition
            ${!disabled && !disableRipple && active ? "scale-100" : "scale-0"}`}
        />
      </div>
    </>
  );
};

const Switch = ({
  defaultChecked = false,
  checked = false,
  disabled = false,
  disableRipple = false,
  name = "",
  id,
  onChange = () => {},
  inputRef,
  styles = {},
}) => {
  const [currChecked, setCurrChecked] = useState(defaultChecked);
  const [active, setActive] = useState(false);
  const handleChange = () => {
    setCurrChecked(!currChecked);
    onChange(!currChecked);
  };

  useEffect(() => {
    setCurrChecked(checked);
  }, [checked]);

  return (
    <>
      <label
        htmlFor={id}
        className={`w-fit z-20 relative ${!disabled && "cursor-pointer"}`}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
      >
        <div className={`relative w-8 h-2 rounded-lg bg-violet-200`} style={{ ...styles.root }}>
          <div
            className={`absolute rounded-[inherit] left-0 h-full top-0 transition-all
              ${currChecked ? "right-0" : "right-full"}
              ${!disabled ? "bg-violet-400" : "bg-gray-400"}
            `}
          >
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <Thumb {...{ disabled, disableRipple, active, styles }} />
            </div>
          </div>
        </div>

        <input
          type="checkbox"
          name={name}
          id={id}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          ref={inputRef}
          disabled={disabled}
          checked={currChecked}
          onChange={handleChange}
          className="block absolute w-0 h-0 opacity-0"
        />
      </label>
    </>
  );
};

export default Switch;
