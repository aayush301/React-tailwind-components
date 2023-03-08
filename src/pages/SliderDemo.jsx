import React from "react";
import Slider from "../components/Slider";

const SliderDemo = () => {
  return (
    <div className="m-8">
      <h1 className="text-center text-xl mb-8">Slider</h1>

      <div className="mb-4">
        Simple slider
        <Slider />
      </div>

      <div className="mb-4 flex items-center gap-4">
        <span>0</span>
        <Slider />
        <span>100</span>
      </div>

      <div className="mb-4">
        Negative values
        <Slider min={-50} max={100} defaultValue={20} />
      </div>

      <div className="mb-4">
        Discrete slider
        <Slider min={0} max={100} step={20} />
      </div>

      <div className="mb-4">
        Display marks
        <Slider min={0} max={100} step={10} marks />
      </div>

      <div className="mb-4">
        Small steps
        <Slider min={0.01} max={0.1} step={0.01} />
      </div>

      <div className="mb-4">
        Disabled Slider
        <Slider min={10} max={50} defaultValue={20} disabled />
      </div>

      <div className="mb-4">
        Always display value label
        <div className="mb-8" />
        <Slider alwaysDisplayValueLabel />
      </div>
    </div>
  );
};

export default SliderDemo;
