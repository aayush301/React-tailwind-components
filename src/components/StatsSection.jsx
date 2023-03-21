import React from "react";

// UI Reference: https://tailwindui.com/components
const stats = [
  { stat: "100%", text: "Trust" },
  { stat: "24/7", text: "Delivery" },
  { stat: "100k", text: "Users" },
];

const StatsSection = () => {
  return (
    <div className="w-screen bg-gray-100 h-80">
      <div className="relative bg-gray-50 w-[90%] mx-auto rounded-sm p-8 text-gray-800">
        <h4 className="mb-8 w-[80%] mx-auto text-center text-xl sm:text-4xl text-gray-700 font-bold">
          Trusted by developers from over 80 planets
        </h4>

        <div className="mb-2 text-gray-500 text-center mx-auto text-sm sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam voluptates nisi perferendis
          minus fuga dolor at quasi reiciendis suscipit.
        </div>

        <div className="mb-12"></div>

        <div className="absolute left-1/2 -translate-x-1/2 w-[100vw] sm:w-[105%] flex rounded-md shadow-md bg-white">
          {stats.map(({ stat, text }, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col justify-center items-center border border-gray-200 p-5 sm:p-12"
            >
              <div className="font-bold text-lg sm:text-3xl text-violet-500">{stat}</div>
              <div className="font-medium mt-2 text-sm sm:text-2xl">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
