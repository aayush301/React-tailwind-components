import React from "react";

const Loader = ({ className = "" }) => {
  return (
    <>
      <div className={`mx-auto h-8 w-8 ${className}`}>
        <div className="h-full w-full animate-loader rounded-full border-[3px] border-indigo-600 border-b-transparent"></div>
      </div>
    </>
  );
};

export default Loader;
