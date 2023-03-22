import React from "react";
import Resizable from "../components/Resizable";

const ResizableDemo = () => {
  return (
    <div>
      <div className="mt-4 mb-16 text-lg text-center">Resizable Component</div>
      <Resizable defaultSize={{ defaultWidth: "80%" }} className="ml-12" minWidth="50vw" maxWidth="1000px">
        <div className="bg-gray-200 border border-gray-300 p-4 select-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sit, dolorem eligendi culpa numquam
          iusto excepturi veniam dolores provident fugit.
        </div>
      </Resizable>
    </div>
  );
};

export default ResizableDemo;
