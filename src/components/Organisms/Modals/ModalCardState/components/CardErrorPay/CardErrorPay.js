import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const CardErrorPay = ({ text, value, ammountAccount }) => {
  return (
    <div className="CardErrorPay">
      <div className="flex-btw">
        <h4 className="body-regular body-regular-w6">${value}</h4>
        <h4 className="body-regular">My account {ammountAccount}</h4>
      </div>
      <p className="body-regular">{text}</p>
      <div className="flex-end">
        <Button className="button button-transparent">
          Resolve <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};
export default CardErrorPay;
