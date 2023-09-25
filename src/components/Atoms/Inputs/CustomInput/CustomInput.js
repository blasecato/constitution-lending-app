import React from "react";
import { Input } from "antd";
import priceSvg from "assets/images/price.svg";

const CustomInput = () => {
  return (
    <div className="CustomInput">
      <Input
        placeholder="150,000"
        prefix={<img src={priceSvg} alt="price" className="priceSvg" />}
      />
    </div>
  );
};
export default CustomInput;
