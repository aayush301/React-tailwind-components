import React, { useEffect, useState } from "react";
// Credits: youtube/@CodingNepal

const ValueLabel = ({ value }) => {
  const labelSize = 40;
  return (
    <div className="flex justify-center items-center aspect-square" style={{ width: labelSize }}>
      <div
        className="mx-auto aspect-square bg-violet-500 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] flex justify-center items-center rotate-45"
        style={{ width: labelSize / Math.sqrt(2) }}
      >
        <div className="text-xs -rotate-45 text-white font-semibold">{value}</div>
      </div>
    </div>
  );
};

const Thumb = ({ thumbSize, isActive, disabled }) => {
  return (
    <div className="relative" style={{ width: thumbSize, height: thumbSize }}>
      <div
        className={`absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-300/50 rounded-full transition ${
          isActive ? "scale-100" : "scale-0"
        }`}
      />
      <button
        className={`absolute w-full h-full rounded-full cursor-pointer shadow-md
        ${!disabled ? "bg-violet-500 hover:bg-violet-600 active:bg-violet-700" : "bg-gray-600"}`}
      />
    </div>
  );
};

const Slider = ({
  value,
  onChange = () => {},
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  marks = false,
  disabled = false,
  alwaysDisplayValueLabel = false,
}) => {
  const [currValue, setCurrValue] = useState(defaultValue || (min + max) / 2);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (value) setCurrValue(value);
  }, [value]);

  const handleChange = e => {
    const value = e.target.value;
    setCurrValue(value);
    onChange(value);
  };

  const thumbSize = 16;
  const gapBetweenLabelAndThumb = 4;
  const getPercentWidthFromValue = value => ((value - min) * 100) / (max - min);

  return (
    <>
      <div
        className={`relative h-1.5 w-48 select-none rounded-lg transition-all ${
          !disabled ? "bg-gray-200" : "bg-gray-300"
        }`}
      >
        {/* Thumb and Value label */}
        <div
          className="flex flex-col items-center absolute z-20 -translate-x-1/2 h-full transition-all"
          style={{ left: `${getPercentWidthFromValue(currValue)}%` }}
        >
          {/* Thumb */}
          <div className="absolute top-1/2 -translate-y-1/2 z-20">
            <Thumb thumbSize={thumbSize} isActive={active} disabled={disabled} />
          </div>

          {/* Value label */}
          <div
            className={`z-30 absolute transition delay-75 -translate-y-full
                ${alwaysDisplayValueLabel || active ? "scale-100" : "scale-0"}`}
            style={{ top: `calc(50% - ${thumbSize / 2}px - ${gapBetweenLabelAndThumb}px)` }}
          >
            <ValueLabel value={currValue} />
          </div>
        </div>

        {/* Percent of width shown in dark color */}
        <div
          className={`h-full rounded-lg absolute transition-all ${
            !disabled ? "bg-violet-400" : "bg-gray-400"
          }`}
          style={{ left: "0", right: `${100 - getPercentWidthFromValue(currValue)}%` }}
        />

        {/* Marks */}
        {marks && (
          <>
            {Array(Math.ceil((max - min) / step - 1))
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="absolute top-1/2 -translate-y-1/2 rounded-full h-1/2 aspect-square bg-white"
                  style={{ left: `${getPercentWidthFromValue(min + step * (idx + 1))}%` }}
                />
              ))}
          </>
        )}

        {/* Actual range input made disappeared */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currValue}
          disabled={disabled}
          onChange={handleChange}
          onMouseDown={() => setActive(true)}
          onBlur={() => setActive(false)}
          onTouchEnd={() => setActive(false)}
          onMouseUp={() => setActive(false)}
          style={{ width: `calc(100% + ${thumbSize}px)`, left: `-${thumbSize / 2}px` }}
          className="absolute appearance-none z-50 opacity-0 cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-[16px]
                [&::-webkit-slider-thumb]:h-[16px]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:cursor-pointer
              "
        />
      </div>
    </>
  );
};

export default Slider;
