import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const elements = [
  <div key={0}>
    <i className="fa-solid fa-home"></i>
  </div>,
  <div key={2}>Projects</div>,
  <div key={3} className="text-violet-500">
    Project 1
  </div>,
];

const BreadcrumbDemo = () => {
  return (
    <div>
      <div className="text-lg my-4 text-center">Breadcrumbs</div>
      <div className="bg-gray-200 p-12 flex flex-col gap-4">
        <Breadcrumb elements={elements} />
        <Breadcrumb elements={elements} separator="-" />
        <Breadcrumb elements={elements} separator="/" />
      </div>
    </div>
  );
};

export default BreadcrumbDemo;
