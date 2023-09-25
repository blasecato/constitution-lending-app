import { Button } from "antd";
import React from "react";

const CardMarketRent = () => {
  return (
    <blockquote className="CardMarketRent">
      <article className="flex-btw">
        <div>
          <h3 className="h4">Market rent</h3>
          <p className="body-card">
            Enter market rents for each of the vacant units
          </p>
        </div>
        <p className="h4 h4-w4">
          Vacant units: <span className="h4">4</span>
        </p>
      </article>
      <article className="flex-btw">
        <p className="body-regular body-regular-italic">
          $2,000<span className="body-regular">/month</span>
        </p>
        <p className="body-regular body-regular-italic">
          $2,000<span className="body-regular">/month</span>
        </p>
        <p className="body-regular body-regular-italic">
          $2,000<span className="body-regular">/month</span>
        </p>
        <p className="body-regular body-regular-italic">
          $2,000<span className="body-regular">/month</span>
        </p>
      </article>
      <Button className="button button-grey">
        Add at least one lease agreement to submit
      </Button>
    </blockquote>
  );
};
export default CardMarketRent;
