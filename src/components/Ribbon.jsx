import React from "react";

// Credits: youtube/@OnlineTutorialsYT
const Ribbon = ({ text = "", verticalDistance = "50%", looseness = "6px", thickness }) => {
  return (
    <>
      <div
        className="absolute flex items-center justify-center aspect-square overflow-hidden"
        style={{ height: verticalDistance, left: `-${looseness}`, top: `-${looseness}` }}
      >
        <div
          className="absolute w-[150%] bg-blue-500 flex justify-center items-center shadow-xl"
          style={{
            height: thickness ? thickness : "15%",
            transform: "translateY(-50%) rotate(-45deg)",
            transformOrigin: "bottom center",
          }}
        >
          {text}
        </div>

        <div
          className="absolute bottom-0 left-0 bg-blue-600 -z-10 aspect-square"
          style={{ height: looseness }}
        />
        <div
          className="absolute top-0 right-0 bg-blue-600 -z-10 aspect-square"
          style={{ height: looseness }}
        />
      </div>
    </>
  );
};

export default Ribbon;
