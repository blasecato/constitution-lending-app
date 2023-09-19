import { Button } from "antd";
import React, { useState } from "react";

const ButtonTabsFilters = () => {
  const [tabActive, setTabActive] = useState("all");
  const dummyTabsFilters = [
    { id: 1, name: "All", key: "all", amount: 25 },
    { id: 2, name: "Not Started", key: "notStarted", amount: 5 },
    { id: 3, name: "Incomplete", key: "incomplete", amount: 8 },
    { id: 4, name: "In Review", key: "inReview", amount: 2 },
    { id: 5, name: "Errors/Alerts", key: "errorsAlerts", amount: 5 },
    { id: 5, name: "Approved", key: "approved", amount: 5 },
  ];
  return (
    <section className="ButtonTabsFilters">
      {dummyTabsFilters?.map((tab) => (
        <Button
          onClick={() => setTabActive(tab.key)}
          className={`tab ${tabActive === tab.key && "tab-active"}`}
          key={tab.key}>
          {tab.name} <span className="number">{tab.amount}</span>
        </Button>
      ))}
    </section>
  );
};
export default ButtonTabsFilters;
