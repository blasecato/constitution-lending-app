import { Button } from "antd";
import React from "react";

const CardEstimatedDSCR = () => {
  return (
    <div className="CardEstimatedDSCR">
      <p className="h2">First, are these estimations correct?</p>
      <div className="card">
        <div className="card-row">
          <div className="card-column">
            <p className="h4 h4-w5">Income</p>
            <p className="h4 h4-w4">Monthly rental income:</p>
          </div>
          <div className="card-column">
            <p className="h4 h4-w6">$48,000</p>
          </div>
        </div>
        <div className="card-row">
          <div className="card-column">
            <p className="h4 h4-w5">Annual Expenses</p>
            <p className="h4 h4-w4">Annual property insurance:</p>
          </div>
          <div className="card-column">
            <p className="h4 h4-w6">$48,000</p>
          </div>
        </div>
        <div className="card-row">
          <div className="card-column">
            <p className="h4 h4-w4">Annual property taxes:</p>
          </div>
          <div className="card-column">
            <p className="h4 h4-w6">$48,000</p>
          </div>
        </div>
        <div className="card-row">
          <div className="card-column">
            <p className="h4 h4-w4">Annual HOA fee:</p>
          </div>
          <div className="card-column">
            <p className="h4 h4-w6">$48,000</p>
          </div>
        </div>
        <div className="card-row card-row_footer">
          <div className="card-column">
            <p className="h4">Estimated DSCR</p>
          </div>
          <div className="card-column">
            <p className="h4 h4-w6">1.2</p>
          </div>
        </div>
      </div>
      <div className="flex-btw">
        <Button className="button button-submit">Looks good</Button>
        <Button className="button button-secondary">
          I want to make edits
        </Button>
      </div>
    </div>
  );
};
export default CardEstimatedDSCR;
