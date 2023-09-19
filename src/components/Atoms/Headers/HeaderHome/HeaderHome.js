import React from "react";
import { Button } from "antd";
import logoCPng from "assets/images/logo-c.png";
import logoPng from "assets/images/logo.png";

const HeaderHome = () => {
  return (
    <div className="HeaderHome-space">
      <div className="HeaderHome">
        <div className="box">
          <img className="logo-c" src={logoCPng} alt="logo-c" />
          <img className="logo" src={logoPng} alt="logo" />
        </div>
        <Button className="button button-secondary">New loan</Button>
      </div>
    </div>
  );
};
export default HeaderHome;
