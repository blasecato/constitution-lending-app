import React from "react";

const ProgressCard = ({ progress }) => {
  return (
    <section className="ProgressCard">
      <div className="ProgressCard--title">
        <p className="body-card body-card-w5">Minimum Liquidity</p>
        <span className="body-card body-card-w6">$2MM</span>
      </div>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="bar-amount"></div>
      </div>
    </section>
  );
};
export default ProgressCard;
