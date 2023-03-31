import React from "react";
import Ribbon from "../components/Ribbon";

const RibbonDemo = () => {
  return (
    <div>
      <h1 className="my-8 text-center text-lg">Ribbon</h1>
      <div className="relative w-80 h-80 mx-auto shadow-xl bg-gray-300 rounded-md">
        <Ribbon text="Best value" />
      </div>

      <div className="relative w-20 h-20 mt-16 mx-auto shadow-xl bg-gray-300 rounded-md">
        <Ribbon verticalDistance="60%" looseness="2px" thickness={"10px"} />
      </div>
    </div>
  );
};

export default RibbonDemo;
