import React from "react";

const Separator = ({ separator }) => {
  return (
    <div className="text-gray-300 text-xs">
      {separator ? <span>{separator}</span> : <i className="fa-solid fa-angle-right"></i>}
    </div>
  );
};

const Breadcrumb = ({ elements, separator }) => {
  return (
    <div className="flex items-center gap-3 rounded-[4px] w-fit bg-white px-3 py-2 text-gray-700 text-sm font-semibold shadow-md">
      {elements.map((elem, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {idx !== 0 && <Separator separator={separator} />}
          {elem}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
