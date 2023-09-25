import { Button } from "antd";
import React, { useState } from "react";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";

const InputAmount = ({ title, type, text }) => {
  const [isAmount, setAmount] = useState(0);
  const handleOperation = (type) => {
    if (type === "addition") {
      setAmount(isAmount + 1);
    }
    if (type === "subtraction") {
      if (isAmount >= 1) {
        setAmount(isAmount - 1);
      }
    }
  };
  return (
    <div className="InputAmount flex-btw">
      <p className="h4 h4-w4">{title}</p>
      <div className="flex">
        {type === "operation" && (
          <>
            <Button
              className="button-operation"
              onClick={() => handleOperation("subtraction")}>
              <MinusCircleOutlined className="anticon anticon-empty" />
              <MinusCircleFilled className="anticon anticon-full" />
            </Button>
            <span>{isAmount}</span>
            <Button
              className="button-operation"
              onClick={() => handleOperation("addition")}>
              <PlusCircleOutlined className="anticon anticon-empty" />
              <PlusCircleFilled className="anticon anticon-full" />
            </Button>
          </>
        )}
        {type === "text" && <p className="h4 h4-w4">{text}</p>}
      </div>
    </div>
  );
};
export default InputAmount;
