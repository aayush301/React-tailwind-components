import React from "react";

// UI Reference: https://tailwindui.com/components/marketing/sections/pricing
const Pricing = () => {
  const secondaryPricingHeightPercent = 90;
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center text-gray-80 md:h-[560px] lg:h-[510px] gap-4 md:gap-0">
        <div
          className="h-full relative flex-1 border border-gray-100 rounded-xl md:rounded-r-none"
          style={{ height: `${secondaryPricingHeightPercent}%` }}
        >
          <div className="p-8">
            <h2 className="mb-4 font-semibold text-lg">Freelancer</h2>
            <div className="mb-7 text-gray-500 font-medium text-[15px]">
              The essentials to provide your best work for clients.
            </div>

            <div className="mb-8">
              <span className="text-3xl font-bold">&#x20B9; 24</span>
              <span className="font-semibold"> /month</span>
            </div>

            <ul className="font-medium text-gray-600 text-[15px]">
              {[
                "5 products",
                "Up to 1,000 subscribers",
                "Basic analytics",
                "48-hour support response time",
              ].map((text, idx) => (
                <li key={idx} className="mb-2">
                  <span className="text-violet-500 mr-3">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Some extra space added for absolute button positioning*/}
            <div className="mt-20 md:mt-0" />

            <button className="absolute bottom-[40px] left-0 right-0 mx-auto w-[90%] bg-white py-2 text-violet-500 font-bold border border-gray-200 rounded-md hover:bg-gray-100 transition">
              Buy plan
            </button>
          </div>
        </div>

        <div className="h-full flex-1 border-2 border-violet-500 rounded-xl flex">
          <div className="relative my-auto p-8 h-full sm:h-[90%]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-lg text-violet-500">Startup</h2>
              <div className="rounded-2xl bg-violet-200 px-3 py-1 text-xs text-violet-600 font-bold">
                Most popular
              </div>
            </div>
            <div className="mb-7 text-gray-500 font-medium text-[15px]">
              A plan that scales with your rapidly growing business.
            </div>

            <div className="mb-8">
              <span className="text-3xl font-bold">&#x20B9; 32</span>
              <span className="font-semibold"> /month</span>
            </div>

            <ul className="font-medium text-gray-600 text-[15px]">
              {[
                "25 products",
                "Up to 10,000 subscribers",
                "Advanced analytics",
                "24-hour support response time",
                "Marketing automations",
              ].map((text, idx) => (
                <li key={idx} className="mb-2">
                  <span className="text-violet-500 mr-3">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Some extra space added for absolute button positioning*/}
            <div className="mt-20 md:mt-0" />

            <button className="absolute bottom-[40px] left-0 right-0 mx-auto mt-16 w-[90%] py-2 bg-violet-700 text-white font-medium rounded-md hover:bg-violet-800 transition">
              Buy plan
            </button>
          </div>
        </div>

        <div
          className="h-full relative flex-1 border border-gray-100 rounded-xl md:rounded-l-none"
          style={{ height: `${secondaryPricingHeightPercent}%` }}
        >
          <div className="p-8">
            <h2 className="mb-4 font-semibold text-lg">Enterprise</h2>
            <div className="mb-7 text-gray-500 font-medium text-[15px]">
              Dedicated support and infrastructure for your company.
            </div>

            <div className="mb-8">
              <span className="text-3xl font-bold">&#x20B9; 48</span>
              <span className="font-semibold"> /month</span>
            </div>

            <ul className="font-medium text-gray-600 text-[15px]">
              {[
                "Unlimited products",
                "Unlimited subscribers",
                "Advanced analytics",
                "1-hour, dedicated support response time",
                "Marketing automations",
              ].map((text, idx) => (
                <li key={idx} className="mb-2">
                  <span className="text-violet-500 mr-3">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Some extra space added for absolute button positioning*/}
            <div className="mt-20 md:mt-0" />

            <button className="absolute bottom-[40px] left-0 right-0 mx-auto w-[90%] bg-white py-2 text-violet-500 font-bold border border-gray-200 rounded-md hover:bg-gray-100 transition">
              Buy plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
