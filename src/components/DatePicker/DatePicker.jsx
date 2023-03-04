import React, { useEffect, useState, useCallback } from "react";
import MonthYearSelection from "./MonthYearSelection";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getOnlyDateFromDate = date => {
  if (!date) return null;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/**
 * @param {(single|multiple|range)} [mode=single] - mode of selection
 * @param {(Date|Date[]|{from:Date,to:Date})} value - Selected date(s)
 * @param {Function} [isHidden] - If passed, this function gets called for every date and hides the date if returned true
 * @param {Function} [isDateUnselectable] - If passed, this function gets called for every date and disables the date if returned true
 */
const DatePicker = ({
  defaultValue,
  value,
  onSelect,
  mode = "single",
  fromYear,
  toYear,
  fromDate,
  toDate,
  hideOutsideDays = false,
  isHidden,
  isDateUnselectable,
  isOpen,
  closeModal,
  noSelectionAllowed = false, // mused when mode = "single"
  minSelections, // used when mode = "multiple"
  maxSelections, // used when mode = "multiple"
  minRangeLength, // used when mode = "range"
  maxRangeLength, // used when mode = "range"
}) => {
  const [shownMonthObj, setShownMonthObj] = useState(
    (() => {
      switch (mode) {
        case "single":
          return getOnlyDateFromDate(defaultValue || new Date());
        case "multiple":
          return getOnlyDateFromDate(defaultValue?.[0] || new Date());
        case "range":
          return getOnlyDateFromDate(defaultValue?.from || new Date());
        default:
          return null;
      }
    })()
  );

  const [selected, setSelected] = useState(
    (() => {
      switch (mode) {
        case "single":
          return getOnlyDateFromDate(defaultValue);
        case "multiple":
          return defaultValue?.map(dt => getOnlyDateFromDate(dt)) || [];
        case "range":
          return {
            from: getOnlyDateFromDate(defaultValue?.from),
            to: getOnlyDateFromDate(defaultValue?.to),
          };
        default:
          return null;
      }
    })()
  );

  const [tabbedDate, setTabbedDate] = useState(null);
  const [monthYearSelectMode, setMonthYearSelectMode] = useState(false);
  const [monthYearSelection, setMonthYearSelection] = useState({ month: "", year: "" });
  const [showDatesSelections, setShowDatesSelections] = useState(false);
  const [lastDateSelected, setlastDateSelected] = useState(null); // used when mode = "multiple"
  const [errorMsg, setErrorMsg] = useState("");

  const isOutsideDate = useCallback(
    date => {
      return (
        date.getFullYear() !== shownMonthObj.getFullYear() || date.getMonth() !== shownMonthObj.getMonth()
      );
    },
    [shownMonthObj]
  );

  const isFullyDisabledDate = useCallback(
    date => {
      return (
        isDateUnselectable?.(date) ||
        isHidden?.(date) ||
        (fromDate && date.getTime() < fromDate.getTime()) ||
        (toDate && date.getTime() > toDate.getTime())
      );
    },
    [isDateUnselectable, isHidden, toDate, fromDate]
  );

  const isCurrentlyDisabledDate = useCallback(
    date => {
      if (isFullyDisabledDate(date) || isOutsideDate(date)) return true;
      if (
        mode === "multiple" &&
        selected.every(dt => dt.getTime() !== date.getTime()) &&
        selected.length === maxSelections
      )
        return true;
      if (
        mode === "range" &&
        selected.from &&
        selected.to &&
        (date.getTime() < selected.from.getTime() || date.getTime() > selected.to.getTime())
      ) {
        if (date.getTime() < selected.from.getTime()) {
          const length = (selected.to.getTime() - date.getTime()) / (24 * 60 * 60 * 1000) + 1;
          if (length < minRangeLength || length > maxRangeLength) return true;
        } else if (date.getTime() > selected.to.getTime()) {
          const length = (date.getTime() - selected.from.getTime()) / (24 * 60 * 60 * 1000) + 1;
          if (length < minRangeLength || length > maxRangeLength) return true;
        }
      }
      return false;
    },
    [isFullyDisabledDate, isOutsideDate, mode, selected, maxSelections, minRangeLength, maxRangeLength]
  );

  const handleDateClick = useCallback(
    date => {
      setTabbedDate(null);
      switch (mode) {
        case "single": {
          if (selected && date.getTime() === selected.getTime() && noSelectionAllowed) setSelected("");
          else setSelected(date);
          break;
        }
        case "multiple": {
          const isASelectedDate = selected.some(dt => dt.getTime() === date.getTime());
          if (isASelectedDate) {
            setSelected(selected.filter(dt => dt.getTime() !== date.getTime()));
            setlastDateSelected(date);
          } else {
            setSelected([...selected, date]);
            setlastDateSelected(date);
          }
          break;
        }
        case "range": {
          if (!selected.from && !selected.to) {
            setSelected({ from: date, to: date });
          } else if (selected.from.getTime() < date.getTime() && date.getTime() < selected.to.getTime()) {
            setSelected({ from: date, to: date });
          } else if (selected.from.getTime() === date.getTime() || selected.to.getTime() === date.getTime()) {
            setSelected({ from: date, to: date });
          } else if (!selected.from || date.getTime() <= selected.from.getTime()) {
            setSelected({ ...selected, from: date });
          } else {
            setSelected({ ...selected, to: date });
          }
          setlastDateSelected(date);
          break;
        }
        default: {
          break;
        }
      }
    },
    [mode, selected, noSelectionAllowed]
  );

  useEffect(() => {
    if (!value || !isOpen) return;
    switch (mode) {
      case "single": {
        setShownMonthObj(getOnlyDateFromDate(value));
        setSelected(getOnlyDateFromDate(value));
        break;
      }
      case "multiple": {
        setShownMonthObj(getOnlyDateFromDate(value[0] || new Date()));
        setSelected(value.map(dt => getOnlyDateFromDate(dt)));
        break;
      }
      case "range": {
        setShownMonthObj(getOnlyDateFromDate(value.from || new Date()));
        setSelected({ from: getOnlyDateFromDate(value?.from), to: getOnlyDateFromDate(value?.to) });
        break;
      }
      default:
        break;
    }
  }, [isOpen, value, mode]);

  useEffect(() => {
    if (monthYearSelectMode) {
      setMonthYearSelection({ month: shownMonthObj.getMonth(), year: shownMonthObj.getFullYear() });
    }
  }, [monthYearSelectMode, shownMonthObj]);

  useEffect(() => {
    if (!isOpen) return;
    const checkKey = e => {
      e.preventDefault();
      if (!selected) return;
      if (e.key === "Enter") {
        if (!tabbedDate) return;
        handleDateClick(tabbedDate);
        setTabbedDate(tabbedDate);
        return;
      }

      let dt = tabbedDate;
      if (!dt) {
        if (mode === "single") {
          dt = selected;
        } else {
          dt = lastDateSelected || new Date();
        }
      }

      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        for (let count = 0; count < 50; count++) {
          if (e.key === "ArrowLeft") {
            dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - 1);
          } else if (e.key === "ArrowRight") {
            dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1);
          } else if (e.key === "ArrowUp") {
            dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - 7);
          } else if (e.key === "ArrowDown") {
            dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 7);
          }

          if (!isFullyDisabledDate(dt)) {
            setTabbedDate(dt);
            return;
          }
        }
        return;
      }

      if (e.key === "Home") {
        dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - dt.getDay());
        while (isFullyDisabledDate(dt) && dt.getTime() <= tabbedDate.getTime()) {
          dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1);
        }
        setTabbedDate(dt);
      } else if (e.key === "End") {
        dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 6 - dt.getDay());
        while (isFullyDisabledDate(dt) && dt.getTime() >= tabbedDate.getTime()) {
          dt = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - 1);
        }
        setTabbedDate(dt);
      }
    };

    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  }, [
    isOpen,
    tabbedDate,
    handleDateClick,
    mode,
    isDateUnselectable,
    isHidden,
    selected,
    isFullyDisabledDate,
    fromDate,
    toDate,
    lastDateSelected,
  ]);

  useEffect(() => {
    if (!tabbedDate) return;
    if (tabbedDate.getMonth() !== shownMonthObj.getMonth())
      setShownMonthObj(new Date(shownMonthObj.getFullYear(), tabbedDate.getMonth()));
  }, [tabbedDate, shownMonthObj]);

  useEffect(() => {
    if (mode !== "multiple") return;
    if (selected.every((dt, i, arr) => !i || arr[i - 1].getTime() <= dt.getTime())) return;
    setSelected([...selected].sort((dt1, dt2) => dt1.getTime() - dt2.getTime()));
  }, [selected, mode]);

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
    }
  }, [errorMsg]);

  const isPrevClickDisabled = () => {
    return (
      (fromYear &&
        new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth() - 1).getFullYear() < fromYear) ||
      (fromDate &&
        new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth(), 0).getTime() < fromDate.getTime())
    );
  };

  const isNextClickDisabled = () => {
    return (
      (toYear &&
        new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth() + 1).getFullYear() > toYear) ||
      (toDate &&
        new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth() + 1, 1).getTime() > toDate.getTime())
    );
  };

  const handlePrevMonthClick = () => {
    setTabbedDate(null);
    setShownMonthObj(new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth() - 1));
  };

  const handleNextMonthClick = () => {
    setTabbedDate(null);
    setShownMonthObj(new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth() + 1));
  };

  const handleReset = () => {
    switch (mode) {
      case "single": {
        setSelected(getOnlyDateFromDate(value || defaultValue));
        setShownMonthObj(getOnlyDateFromDate(value || defaultValue || new Date()));
        break;
      }
      case "multiple": {
        setSelected(value?.map(dt => getOnlyDateFromDate(dt)) || []);
        setShownMonthObj(getOnlyDateFromDate(value?.[0] || defaultValue?.[0] || new Date()));
        break;
      }
      case "range": {
        setSelected({ from: getOnlyDateFromDate(value?.from), to: getOnlyDateFromDate(value?.to) });
        setShownMonthObj(getOnlyDateFromDate(value?.from || defaultValue?.from || new Date()));
        break;
      }
      default:
        break;
    }
    setTabbedDate(null);
  };

  const handleOK = () => {
    if (mode === "single") {
      if (!noSelectionAllowed && !selected) {
        setErrorMsg("Please select a date");
        return;
      }
    } else if (mode === "multiple") {
      if (minSelections && selected.length < minSelections) {
        setErrorMsg(`Atleast ${minSelections} selections are required`);
        return;
      }
    }
    onSelect?.(selected);
    closeModal();
  };

  const getClasses = date => {
    const isDisabled = isCurrentlyDisabledDate(date);
    const isToday = date.getTime() === getOnlyDateFromDate(new Date()).getTime();
    const isTabbed = tabbedDate && tabbedDate.getTime() === date.getTime();
    const isSelected = (() => {
      switch (mode) {
        case "single":
          return selected && date.getTime() === selected.getTime();
        case "multiple":
          return selected.some(dt => dt.getTime() === date.getTime());
        case "range":
          return [selected?.from, selected?.to].some(dt => dt?.getTime() === date.getTime());
        default:
          return false;
      }
    })();

    if (isDisabled) return "font-normal text-gray-400 border-transparent ";

    // Method of adding classes: Deciding each property one by one (according to the conditions),
    // e.g., first deciding outline, then border, then bg, then text.
    let classes = "";
    if (isTabbed) classes += "outline-blue-600 ";

    if (isToday) classes += "border-gray-900 ";
    else if (isTabbed) classes += "border-white ";
    else classes += "border-transparent ";

    if (!isSelected) classes += "hover:bg-gray-200 ";

    if (isSelected) classes += "bg-blue-500 text-white ";
    else classes += "text-gray-700 ";

    return classes;
  };

  const getShownDates = () => {
    const firstDayOfCurrShownMonth = new Date(
      shownMonthObj.getFullYear(),
      shownMonthObj.getMonth(),
      1
    ).getDay();
    const lastDateOfCurrShownMonth = new Date(
      shownMonthObj.getFullYear(),
      shownMonthObj.getMonth() + 1,
      0
    ).getDate();
    const lastDayOfCurrShownMonth = new Date(
      shownMonthObj.getFullYear(),
      shownMonthObj.getMonth() + 1,
      0
    ).getDay();

    let shownDates = [];
    for (let i = firstDayOfCurrShownMonth - 1; i >= 0; i--) {
      shownDates.push(new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth(), -i));
    }

    for (let i = 1; i <= lastDateOfCurrShownMonth; i++) {
      shownDates.push(new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth(), i));
    }

    for (let i = 1; i <= 6 - lastDayOfCurrShownMonth; i++) {
      shownDates.push(new Date(shownMonthObj.getFullYear(), shownMonthObj.getMonth() + 1, i));
    }
    return shownDates;
  };

  const shownDates = getShownDates();

  return (
    <>
      <div className="flex max-h-[500px] min-h-[400px] w-[calc(40px*7+16px)] flex-col rounded-sm bg-white text-sm text-gray-800 shadow-xl">
        <div className="bg-blue-500 py-4 px-4 text-lg font-medium text-white">
          {(() => {
            switch (mode) {
              case "single": {
                return (
                  <>
                    {!selected ? (
                      <div>Select a date</div>
                    ) : (
                      <>
                        <div className="text-sm text-gray-200">{selected.getFullYear()}</div>
                        <div>
                          {days[selected.getDay()]}, {selected.getDate()} {months[selected.getMonth()]}
                        </div>
                      </>
                    )}
                  </>
                );
              }
              case "multiple": {
                return (
                  <button
                    title={!showDatesSelections ? "Show dates selected" : "Hide dates selected"}
                    className="rounded-sm px-2 py-0.5 hover:bg-blue-600"
                    onClick={() => setShowDatesSelections(!showDatesSelections)}
                  >
                    {selected.length} selected
                  </button>
                );
              }
              case "range": {
                return (
                  <div className="text-base">
                    {selected.from && selected.to && (
                      <>
                        {days[selected.from.getDay()]}, {selected.from.getDate()}{" "}
                        {months[selected.from.getMonth()]} {selected.from.getFullYear()} -{" "}
                        {days[selected.to.getDay()]}, {selected.to.getDate()} {months[selected.to.getMonth()]}{" "}
                        {selected.to.getFullYear()}
                      </>
                    )}
                  </div>
                );
              }
              default:
                return <></>;
            }
          })()}
        </div>

        <div>{errorMsg && <div className="mx-2 my-1 text-xs text-red-500">{errorMsg}</div>}</div>

        <div className="flex w-full flex-grow flex-col overflow-hidden">
          {monthYearSelectMode ? (
            <MonthYearSelection
              {...{
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
              }}
            />
          ) : showDatesSelections ? (
            <div className="flex flex-grow flex-col overflow-hidden py-4 font-medium">
              <h6 className="mb-4 px-4 font-semibold">Selected Dates</h6>
              <ol className="flex-grow list-decimal overflow-auto px-4">
                {selected.map((dt, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setShownMonthObj(dt);
                      setShowDatesSelections(false);
                    }}
                    className="ml-3 mb-2 list-item cursor-pointer select-none items-center px-2 py-1 transition hover:bg-gray-100"
                  >
                    <div className="flex">
                      <span>
                        {days[dt.getDay()]}, {dt.getDate()} {months[dt.getMonth()]} {dt.getFullYear()}
                      </span>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          handleDateClick(dt);
                        }}
                        className="ml-auto flex aspect-square min-h-fit w-fit items-center justify-center px-1 text-red-400 hover:bg-gray-300"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="bg-white px-[8px] py-1.5">
              <div className="flex items-center py-1">
                <button
                  className="ml-2 rounded-sm px-1 font-medium transition hover:bg-gray-200"
                  onClick={() => setMonthYearSelectMode(true)}
                >
                  <span>
                    {months[shownMonthObj.getMonth()]} {shownMonthObj.getFullYear()}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div className="ml-auto flex items-center gap-1">
                  <button
                    title="Move to current month"
                    onClick={() => setShownMonthObj(new Date())}
                    className="flex aspect-square min-h-fit w-fit items-center justify-center rounded-[3px] px-2 text-gray-600 hover:bg-gray-100"
                  >
                    <i className="fa-regular fa-calendar"></i>
                  </button>
                  <button
                    onClick={handlePrevMonthClick}
                    disabled={isPrevClickDisabled()}
                    className="flex aspect-square min-h-fit w-fit items-center justify-center rounded-full px-3 text-gray-600 disabled:text-gray-400 [&:not(:disabled)]:hover:bg-gray-100"
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button
                    onClick={handleNextMonthClick}
                    disabled={isNextClickDisabled()}
                    className="flex aspect-square min-h-fit w-fit items-center justify-center rounded-full px-3 text-gray-600 disabled:text-gray-400 [&:not(:disabled)]:hover:bg-gray-100"
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>

              <div className="mb-2 flex border-b border-b-gray-300">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <div
                    key={i}
                    className="flex h-[40px] w-[40px] items-center justify-center text-xs font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap">
                {shownDates.map((shownDate, i) => (
                  <div key={i} className="relative flex h-[40px] w-[40px] items-center justify-center p-0.5">
                    <div
                      className={
                        "z-10 flex h-full w-full select-none items-center justify-center rounded-full border font-medium outline-none outline-offset-0 transition " +
                        `${isCurrentlyDisabledDate(shownDate) ? "pointer-events-none" : "cursor-pointer"} ` +
                        getClasses(shownDate)
                      }
                      onClick={() => handleDateClick(shownDate)}
                      disabled={isCurrentlyDisabledDate(shownDate)}
                    >
                      {(hideOutsideDays && shownDate.getMonth() !== shownMonthObj.getMonth()) ||
                      isHidden?.(shownDate)
                        ? ""
                        : shownDate.getDate()}
                    </div>

                    {mode === "range" &&
                      !isOutsideDate(shownDate) &&
                      selected.from?.getTime() !== selected.to?.getTime() &&
                      (selected.from?.getTime() < shownDate.getTime() &&
                      shownDate.getTime() < selected.to?.getTime() ? (
                        <div className="absolute h-4 w-full bg-blue-300"></div>
                      ) : shownDate.getTime() === selected.from?.getTime() ? (
                        <div className="absolute right-0 h-4 w-1/2 bg-blue-300"></div>
                      ) : shownDate.getTime() === selected.to?.getTime() ? (
                        <div className="absolute left-0 h-4 w-1/2 bg-blue-300"></div>
                      ) : (
                        <></>
                      ))}
                  </div>
                ))}
              </div>

              <div className="mt-2 mb-3 flex px-4 text-xs">
                <button
                  onClick={handleReset}
                  className="ml-auto rounded-sm py-1 px-1 font-semibold uppercase text-blue-500 hover:bg-gray-200"
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    handleReset();
                    closeModal();
                  }}
                  className="rounded-sm py-1 px-1 font-semibold uppercase text-blue-500 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOK}
                  className="rounded-sm py-1 px-1 font-semibold uppercase text-blue-500 hover:bg-gray-200"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DatePicker;
