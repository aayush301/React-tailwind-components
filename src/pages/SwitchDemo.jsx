import React from "react";
import Switch from "../components/Switch";

const SwitchDemo = () => {
  return (
    <div className="m-8">
      <h1 className="m-8 text-center">Switch</h1>

      <div className="ml-8 flex flex-col gap-8">
        <Switch />
        <Switch disabled />
        <Switch disabled checked />
        <Switch />
        <Switch
          styles={{
            root: { width: 30, height: 18 },
            thumb: { width: 25, height: 25 },
          }}
        />
      </div>
    </div>
  );
};

export default SwitchDemo;
