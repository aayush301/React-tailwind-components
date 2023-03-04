import React, { createRef, useEffect, useState } from "react";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const MonthYearSelection = ({
  monthYearSelection,
  setMonthYearSelection,
  shownMonthObj,
  setShownMonthObj,
  setMonthYearSelectMode,
  selected,
  setSelected,
  fromYear,
  toYear,
  fromDate,
  toDate,
  mode,
}) => {
  const [yearsList, setyearsList] = useState([]);
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    const yearsList = [];
    let minYear = 1900,
      maxYear = 2100;
    if (fromYear || fromDate) minYear = fromYear || fromDate.getFullYear();
    if (toYear || toDate) maxYear = toYear || toDate.getFullYear();
    for (let i = minYear; i <= maxYear; i++) yearsList.push(i);
    setyearsList(yearsList);

    const refs = yearsList.reduce((acc, year) => {
      acc[year] = createRef();
      return acc;
    }, {});
    setRefs(refs);
  }, [fromDate, fromYear, toYear, toDate]);

  useEffect(() => {
    refs[shownMonthObj.getFullYear()]?.current.scrollIntoView({ inline: "center" });
  }, [refs, shownMonthObj]);

  const handleOKMonthYearSelection = () => {
    setMonthYearSelectMode(false);
    setShownMonthObj(new Date(monthYearSelection.year, monthYearSelection.month));
    if (mode === "single") {
      setSelected(new Date(monthYearSelection.year, monthYearSelection.month, selected.getDate()));
    }
  };

  return (
    <>
      <div className="px-[16px] py-1.5">
        <div className="mx-2 my-4 flex gap-4 overflow-auto border-b border-b-gray-200 px-24 pb-2 [&::-webkit-scrollbar]:hidden">
          {yearsList.map(year => (
            <div
              key={year}
              ref={refs[year]}
              className={`cursor-pointer select-none hover:bg-gray-200 ${
                monthYearSelection.year === year ? "font-bold" : ""
              }`}
              onClick={() => setMonthYearSelection({ ...monthYearSelection, year })}
            >
              {year}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap">
          {months.map((month, i) => (
            <div
              key={i}
              className={`m-2 flex w-[45px] cursor-pointer select-none items-center justify-center rounded-lg px-4 py-1.5 ${
                monthYearSelection.month === i ? "bg-sky-400 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setMonthYearSelection({ ...monthYearSelection, month: i })}
            >
              {month}
            </div>
          ))}
        </div>

        <div className="mt-2 mb-3 flex px-4">
          <button
            onClick={() => setMonthYearSelectMode(false)}
            className="ml-auto rounded-sm py-1 px-2 font-semibold uppercase text-blue-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleOKMonthYearSelection}
            className="rounded-sm py-1 px-2 font-semibold uppercase text-blue-500 hover:bg-gray-100"
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default MonthYearSelection;
