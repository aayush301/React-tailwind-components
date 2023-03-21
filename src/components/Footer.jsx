import React from "react";

// UI Reference: https://tailwindui.com/components/marketing/sections/footers
const data = [
  { title: "Solutions", list: ["Marketing", "Analytics", "Commerce", "Insights"] },
  { title: "Support", list: ["Pricing", "Documentation", "Guides", "API Status"] },
  { title: "Company", list: ["About", "Blog", "Jobs", "Press", "Partners"] },
  { title: "Legal", list: ["Claim", "Privacy", "Terms of Use"] },
];

const Footer = ({ theme = "dark" }) => {
  return (
    <>
      <div
        className={`w-screen px-4 pt-8 md:pt-28 text-xs sm:text-sm
      ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}
      `}
      >
        <div className="flex flex-col md:flex-row gap-8 sm:gap-20 ml-6 mr-12">
          <div className="self-center">
            <div className="mb-2 md:mb-6">
              Making the world a better place through constructing elegant hierachies.
            </div>

            <div className="flex gap-4 text-sm sm:text-lg">
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>

          <div className="mx-auto flex flex-row gap-6 md:gap-12 flex-wrap sm:flex-nowrap">
            {data.map(({ title, list }, idx) => (
              <div key={idx}>
                <h5
                  className={`font-semibold mb-2 sm:mb-8
                  ${theme === "dark" ? "text-gray-300" : "text-gray-900"} `}
                >
                  {title}
                </h5>
                <ul className="flex flex-col gap-3 sm:gap-5">
                  {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-16 border-t py-7 text-gray-500 text-xs
          ${theme === "dark" ? "border-t-gray-800" : "border-t-gray-300"} `}
        >
          &copy; 2020 Your Company, Inc. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
