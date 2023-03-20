import React, { useEffect, useRef, useState } from "react";

const FaqItem = ({ faq, defaultAllExpanded }) => {
  const [isItemOpen, setIsItemOpen] = useState(faq.expanded ?? defaultAllExpanded ?? false);
  const ansRef = useRef();
  const [height, setHeight] = useState("auto");

  const handleClick = () => {
    setIsItemOpen(!isItemOpen);
  };

  useEffect(() => {
    if (ansRef.current) setHeight(ansRef.current.offsetHeight);
  }, []);

  const { q, a } = faq;

  return (
    <div className="py-6 border-t border-t-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={handleClick}
        title={!isItemOpen ? "Show" : "Hide"}
      >
        <div className="font-semibold text-gray-800">{q}</div>
        <button
          className="text-gray-600 rounded-full p-2 w-8 h-8 flex justify-center items-center text-2xl hover:bg-gray-200 transition"
          title={!isItemOpen ? "Show" : "Hide"}
        >
          {isItemOpen ? "-" : "+"}
        </button>
      </div>

      <div
        className={`text-gray-500 font-medium overflow-hidden transition-[height]`}
        style={{ height: isItemOpen ? height : 0 }}
      >
        <div ref={ansRef} className="pt-2">
          {a}
        </div>
      </div>
    </div>
  );
};

const Faq = ({ faqs = [], defaultAllExpanded = false }) => {
  return (
    <div className="w-[95%] sm:w-[90%] md:w-[75%] mx-auto">
      <div className="mb-4 text-gray-800 text-lg font-semibold">Frequently Asked Questions</div>
      {faqs.map((faq, idx) => (
        <FaqItem key={idx} faq={faq} defaultAllExpanded={defaultAllExpanded} />
      ))}
    </div>
  );
};

export default Faq;
