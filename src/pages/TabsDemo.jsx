import React, { useState } from "react";
import TabBar from "../components/Tabs";

const tabsData = [
  { tabName: "tab1", tabTitle: "Tab 1" },
  { tabName: "longwordtab2", tabTitle: "Long word Tab 2" },
  { tabName: "tab3", tabTitle: "Tb 3" },
];
const TabsDemo = () => {
  const [activeTabName, setActiveTabName] = useState("tab1");
  return (
    <>
      <h1 className="my-2 text-center text-lg">Tabs</h1>
      <div className="w-screen">
        <TabBar tabsData={tabsData} activeTabName={activeTabName} onTabClick={t => setActiveTabName(t)} />
      </div>
    </>
  );
};

export default TabsDemo;
