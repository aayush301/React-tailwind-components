import React, { useState } from "react";
import RadioBtn from "../components/RadioBtn";

const RadioBtnDemo = () => {
  const [fruit, setFruit] = useState("apple");
  const handleChange = (name, value) => {
    setFruit(value);
  };

  return (
    <div>
      <h1 className="mt-2 mb-8 text-center text-lg">Radio Button</h1>
      <div>
        <div>
          <RadioBtn
            name="fruit"
            value="apple"
            onChange={handleChange}
            checked={fruit === "apple"}
            label="Apple"
          />
        </div>

        <div>
          <RadioBtn
            name="fruit"
            value="banana"
            onChange={handleChange}
            checked={fruit === "banana"}
            label="Banana"
          />
        </div>
      </div>
    </div>
  );
};

export default RadioBtnDemo;
