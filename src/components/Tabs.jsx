import React, { createRef, useEffect, useState } from "react";
import { useRef } from "react";

/**
 * @param {({tabName:string, tabTitle:string})[]} tabsData - Array of tabs. tabName: unique tab name to each tab
 */
const TabBar = ({ tabsData, activeTabName, onTabClick }) => {
  const tabGroupRef = useRef();
  const sliderRef = useRef();
  const [refs, setRefs] = useState([]);
  const [isAtLeftEnd, setIsAtLeftEnd] = useState(true);
  const [isAtRightEnd, setIsAtRightEnd] = useState(true);

  // Create ref for each tab
  useEffect(() => {
    const refs = tabsData.map(() => createRef());
    setRefs(refs);
  }, [tabsData]);

  // Slide the slider when active tab changes
  useEffect(() => {
    const i = tabsData.findIndex(tab => tab.tabName === activeTabName);
    if (!sliderRef.current || !refs[i]?.current) return;
    const w = refs[i].current.offsetWidth;
    const left = refs[i].current.offsetLeft;
    sliderRef.current.style.left = `${left}px`;
    sliderRef.current.style.width = `${w}px`;
  }, [activeTabName, refs, tabsData]);

  // Scroll into view of active tab when active tab changes
  useEffect(() => {
    const i = tabsData.findIndex(tab => tab.tabName === activeTabName);
    if (!refs[i]?.current) return;
    refs[i]?.current.scrollIntoView({ block: "nearest", inline: "center" });
    setIsAtLeftEnd(tabGroupRef.current?.scrollLeft === 0);
    setIsAtRightEnd(
      tabGroupRef.current?.scrollLeft + tabGroupRef.current?.clientWidth === tabGroupRef.current?.scrollWidth
    );
  }, [refs, tabsData, activeTabName]);

  // Keep an eye on horizontal scrolling to detect whether we are at left end, at right end, or in between.
  const handleScroll = () => {
    setIsAtLeftEnd(tabGroupRef.current?.scrollLeft === 0);
    setIsAtRightEnd(
      tabGroupRef.current?.scrollLeft + tabGroupRef.current?.clientWidth === tabGroupRef.current?.scrollWidth
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={tabGroupRef}
        onScroll={handleScroll}
        className="relative flex w-full overflow-auto scroll-smooth rounded-sm font-medium text-gray-800 [&::-webkit-scrollbar]:hidden"
      >
        {tabsData.map((tab, i) => (
          <button
            ref={refs[i]}
            key={i}
            onClick={() => onTabClick(tab.tabName)}
            className={`shrink-0 cursor-pointer border-x border-x-gray-200 px-3 py-2 transition-all hover:bg-gray-200
              ${activeTabName === tab.tabName && "text-rose-600"}
            `}
          >
            {tab.tabTitle}
          </button>
        ))}
        <div ref={sliderRef} className="absolute bottom-0 h-[2px] bg-rose-500 transition-[left,width]"></div>
      </div>

      {/* Show left blurred to indicate that we are not at extreme left, if so is the case */}
      {!isAtLeftEnd && (
        <span
          className="absolute left-0 top-0 bottom-0 flex w-16 items-center pl-[1px]"
          style={{
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(245, 243, 240) 40%, rgb(245, 243, 240) 100%)",
          }}
        >
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-gray-200"
            onClick={() => (tabGroupRef.current.scrollLeft -= 100)}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </span>
      )}

      {/* Show right blurred to indicate that we are not at extreme right, if so is the case */}
      {!isAtRightEnd && (
        <span
          className="absolute right-0 top-0 bottom-0 flex w-16 items-center justify-end pr-[1px]"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(245, 243, 240) 40%, rgb(245, 243, 240) 100%)",
          }}
        >
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-gray-200"
            onClick={() => (tabGroupRef.current.scrollLeft += 100)}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </span>
      )}
    </div>
  );
};

export default TabBar;
