import React, { createRef, useCallback, useEffect, useState } from "react";
// UI/UX Reference: https://www.shapedivider.app/

const formInputs = [
  { title: "What is your opinion?", name: "opinion" },
  { title: "What do you suggest?", name: "suggestion" },
  { title: "Your feedback!", name: "feedback" },
];

const initialState = formInputs.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {});

const AnimatedForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [refs] = useState(formInputs.map(() => createRef()));

  useEffect(() => {
    refs[currentStep - 1].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBackClick = () => {
    if (currentStep > 1) setCurrentStep(step => step - 1);
  };

  const handleNextClick = useCallback(() => {
    if (currentStep < formInputs.length) setCurrentStep(step => step + 1);
    else {
      const str = Object.entries(formData)
        .map(([key, val]) => `${key}: ${val}`)
        .join(",\n");
      alert(`You submitted:\n${str}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key !== "Enter") return;
      handleNextClick();
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleNextClick]);

  return (
    <>
      <div className="flex flex-col w-[400px] max-w-[100vw] h-[450px] rounded-md bg-white shadow-2xl mx-auto text-gray-800">
        {/* Top static header */}
        <div className="bg-violet-500 w-full text-white font-medium px-4 py-6 rounded-t-[inherit]">
          Please fill out the form!
        </div>

        {/* Animated form */}
        <div className="flex-grow relative">
          {/* Stacking of running inputs on top */}
          <div className="absolute top-0 left-0 right-0 text-sm select-none">
            {formInputs.map(({ title, name }, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStep(idx + 1)}
                className={`flex gap-6 items-center justify-between border-b-2 hover:bg-gray-200 border-b-gray-300 py-3 px-2 sm:px-6 cursor-pointer transition duration-500
                    ${
                      idx + 1 >= currentStep
                        ? "opacity-0 translate-y-4 bg-transparent pointer-events-none"
                        : "bg-gray-100 translate-y-0"
                    }
                `}
              >
                <div className="flex-grow min-w-0 flex-shrink">
                  <div className="font-medium text-base text-gray-600">{title}</div>
                  <div className="whitespace-nowrap text-xs text-gray-500 overflow-ellipsis overflow-hidden font-medium">
                    {formData[name]}
                  </div>
                </div>

                <span className="flex-shrink-0">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
            ))}
          </div>

          {/* Actual inputs */}
          {formInputs.map(({ title, name, placeholder }, idx) => (
            <div
              key={idx}
              className={`absolute left-0 right-0 px-6 transition-all duration-500 ease-out
                ${idx + 1 < currentStep && "top-[20%]"}
                ${idx + 1 > currentStep && "top-[100%]"}
                ${
                  idx + 1 === currentStep
                    ? "opacity-100 top-[50%] pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }
              `}
            >
              <div className="mb-16 font-medium text-lg text-gray-600">{title}</div>
              <input
                ref={refs[idx]}
                type="text"
                name={name}
                className="outline-none border-b-2 border-b-violet-200 focus:border-b-violet-500 bg-inherit w-full py-1 font-medium text-sm transition text-gray-600"
                placeholder={placeholder || "Type here..."}
                value={formData[name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="z-30 flex justify-end items-center border-t border-t-gray-200 bg-white p-4 select-none">
          {currentStep > 1 && (
            <button
              className="mr-2 px-3 py-1 rounded-sm font-semibold uppercase text-[14px] hover:bg-violet-100 text-gray-600 transition duration-500"
              onClick={handleBackClick}
            >
              Back
            </button>
          )}

          <button
            className="px-3 py-1 rounded-sm font-semibold uppercase text-[14px] bg-violet-100 hover:bg-violet-200 active:bg-violet-200 text-violet-600 transition"
            onClick={handleNextClick}
          >
            {currentStep < formInputs.length ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AnimatedForm;
