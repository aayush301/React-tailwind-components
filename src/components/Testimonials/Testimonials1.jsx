import React, { useEffect, useState } from "react";

// UI Reference: https://dribbble.com/shots/3934425-Testimonial-Widget-UI-Animation
const Testimonials1 = ({ data }) => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveItem(id => (id + 1) % data.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [data]);

  return (
    <>
      <div className="bg-[#f2f2f2] py-12 text-gray-800 shadow-xl">
        {/* Title */}
        <h1 className="mb-3 text-gray-900 text-lg mx-auto text-center font-semibold">
          Some words from our happy clients
        </h1>

        {/* Subtitle */}
        <div className="mx-auto text-center text-gray-900 font-medium">
          Our Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quis minus facere maxime
          cupiditate dolores!
        </div>

        {/* Some space */}
        <div className="mb-16"></div>

        {/* Quote container along with person details */}
        <div className="relative mx-auto w-[500px] h-[280px] border-l-4 border-l-sky-500 bg-[#f7f7f7] px-8 py-14 text-center shadow-2xl rounded-sm">
          <div>
            <div className="mb-1 font-semibold text-gray-600">{data[activeItem].personName}</div>
            <div className="mb-3 text-sm text-gray-400">{data[activeItem].profile}</div>
            <div className="mx-auto mb-4 w-16 h-1 bg-yellow-400"></div>
            <div className="mb-1 text-left text-red-500">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <div className="text-gray-600 font-medium text-sm">{data[activeItem].quote}</div>
          </div>

          {/* Person image */}
          <div className="absolute w-20 h-20 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 shadow-2xl ">
            <img src={data[activeItem].imageUrl} alt="profile" className="w-full h-full rounded-[inherit]" />
          </div>

          {/* Left button */}
          <button
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 aspect-square bg-violet-500 text-white font-bold rounded-full flex justify-center items-center hover:bg-violet-600 active:bg-violet-700 shadow-2xl transition"
            onClick={() => setActiveItem(Math.max(0, activeItem - 1))}
            title="Move to previous"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>

          {/* Right button */}
          <button
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-8 aspect-square bg-violet-500 text-white font-bold rounded-full flex justify-center items-center hover:bg-violet-600 active:bg-violet-700 shadow-2xl transition"
            onClick={() => setActiveItem(Math.min(data.length - 1, activeItem + 1))}
            title="Move to next"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

        {/* Item Indicator */}
        <div className="mx-auto mt-4 flex gap-2 w-fit">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-full cursor-pointer transition-all duration-500 ${
                activeItem === idx ? "w-5 h-2.5 bg-violet-500" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveItem(idx)}
              title={`Move to ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials1;
