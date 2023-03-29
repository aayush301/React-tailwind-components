import React from "react";
import Loader from "../components/Loader";

const LoaderDemo = () => {
  return (
    <div>
      <h1 className="mt-2 mb-8 text-center font-semibold">Loader</h1>
      <div className="mx-auto my-8">
        <Loader />
      </div>
    </div>
  );
};

export default LoaderDemo;
