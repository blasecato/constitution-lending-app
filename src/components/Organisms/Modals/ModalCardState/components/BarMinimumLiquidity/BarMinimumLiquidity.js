import React from "react";

const BarMinimumLiquidity = ({ title, price, percentage }) => {
  return (
    <div className="BarMinimumLiquidity">
      <div className="flex-btw">
        <h4 className="h4 h4-w4">{title}</h4>
        <h4 className="h4 h4-w5">{price}</h4>
      </div>
      <div className="bar">
        <div className="bar-percentage" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
export default BarMinimumLiquidity;
