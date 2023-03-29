import React from "react";
import TooltipProvider from "../components/Tooltip";

const TooltipDemo = () => {
  return (
    <>
      <TooltipProvider>
        <div>
          <h1 className="m-8 text-center">Tooltip</h1>
          <div className="m-4 flex gap-8">
            <button
              title="This is some text"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Hover over me
            </button>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

export default TooltipDemo;
