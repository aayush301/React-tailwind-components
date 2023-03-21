import React from "react";

// UI Reference: https://tailwindui.com/components/marketing/sections/pricing
const data = [
  {
    feature: "Tax Savings",
    compare: {
      Starter: { type: "boolean", value: true },
      Scale: { type: "boolean", value: true },
      Growth: { type: "boolean", value: true },
    },
  },
  {
    feature: "Easy to use accounting",
    compare: {
      Starter: { type: "boolean", value: true },
      Scale: { type: "boolean", value: true },
      Growth: { type: "boolean", value: true },
    },
  },
  {
    feature: "Multi-accounts",
    compare: {
      Starter: { value: "3 accounts" },
      Scale: { value: "unlimited accounts" },
      Growth: { value: "7 accounts" },
    },
  },
  {
    feature: "Invoicing",
    compare: {
      Starter: { value: "3 invoices" },
      Scale: { value: "unlimited invoices" },
      Growth: { value: "7 invoices" },
    },
  },
  {
    feature: "Exclusive offers",
    compare: {
      Starter: { type: "boolean", value: false },
      Scale: { type: "boolean", value: true },
      Growth: { type: "boolean", value: true },
    },
  },
  {
    feature: "6 months free advisor",
    compare: {
      Starter: { type: "boolean", value: false },
      Scale: { type: "boolean", value: true },
      Growth: { type: "boolean", value: true },
    },
  },
  {
    feature: "Mobile and web access",
    compare: {
      Starter: { type: "boolean", value: false },
      Scale: { type: "boolean", value: true },
      Growth: { type: "boolean", value: false },
    },
  },
];

const PricingComparisonTable = () => {
  return (
    <>
      <div className="border border-gray-200 rounded-md bg-gray-50 py-6 px-4 text-gray-800 text-sm sm:text-[15px] font-medium">
        <div className="bg-inherit sticky top-0 grid grid-cols-4 gap-3 mb-4 border-b border-b-gray-100 pt-4 pb-4 font-semibold">
          <div>Catered for business</div>

          {[
            { title: "Starter", subtitle: "All your business finances, taken care of." },
            { title: "Scale", subtitle: "The best financial services for your thriving business." },
            { title: "Growth", subtitle: "Convenient features to take your business to the nest level." },
          ].map(({ title, subtitle }, idx) => (
            <div key={idx}>
              <h4 className="mb-2 font-bold text-gray-900">{title}</h4>
              <div className="font-normal text-gray-700">{subtitle}</div>
            </div>
          ))}
        </div>

        <div>
          {data.map(({ feature, compare }, featureIdx) => (
            <div
              key={featureIdx}
              className={`grid grid-cols-4 gap-3 ${featureIdx !== 0 && "border-t border-t-gray-200"}`}
            >
              <div className="flex items-center py-2">{feature}</div>

              {Object.keys(compare).map((pack, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-center text-center border-0 border-x-2 border-gray-100 bg-white py-3.5
                    ${featureIdx === 0 && "rounded-t-md border-t-2"}
                    ${featureIdx === data.length - 1 && "rounded-b-md border-b-2"}
                  `}
                >
                  <>
                    {compare[pack].type === "boolean" ? (
                      <>
                        {compare[pack].value ? (
                          <span className="text-violet-500 font-bold">
                            <i className="fa-solid fa-check"></i>
                          </span>
                        ) : (
                          <span className="text-gray-400">
                            <i className="fa-solid fa-xmark"></i>
                          </span>
                        )}
                      </>
                    ) : (
                      <>{compare[pack].value}</>
                    )}
                  </>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingComparisonTable;
