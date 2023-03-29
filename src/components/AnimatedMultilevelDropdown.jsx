import React, { useEffect, useRef, useState } from "react";

const AnimatedMultilevelDropdown = () => {
  const [open, setOpen] = useState(false);
  const [right, setRight] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!right) {
      setHeight(ref1.current.offsetHeight);
    } else {
      setHeight(ref2.current.offsetHeight);
    }
  }, [right]);

  return (
    <>
      <div className="relative w-[250px] select-none text-gray-100">
        <div
          onClick={() => setOpen(o => !o)}
          className="cursor-pointer w-full bg-gray-800 py-1.5 px-2.5 rounded-[4px] hover:bg-gray-900 active:bg-gray-900 transition"
        >
          <div>Select option</div>
        </div>

        <div
          className={`w-full flex absolute transition-all overflow-hidden items-start duration-700
            bg-gray-700 rounded-b-md cursor-pointer text-[15px] shadow-xl
            ${
              !open
                ? "opacity-0 -translate-y-[20px] pointer-events-none -z-10"
                : "opacity-100 translate-y-0 pointer-events-auto z-10"
            }`}
          style={{ height: `${height}px` }}
        >
          <div ref={ref1} className={`shrink-0 w-full transition-all duration-700 ${right && "-ml-[100%]"}`}>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">A1</div>
            <div
              className="px-2.5 py-1.5 hover:bg-gray-800 transition flex justify-between items-center"
              onClick={() => setRight(true)}
            >
              <span>A2</span>
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">A3</div>
          </div>

          <div ref={ref2} className="shrink-0 w-full">
            <div className="px-2.5 py-1.5 flex items-center gap-4" onClick={() => setRight(false)}>
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
              <span>Go back</span>
            </div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B1</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
            <div className="px-2.5 py-1.5 hover:bg-gray-800 transition">B2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedMultilevelDropdown;
