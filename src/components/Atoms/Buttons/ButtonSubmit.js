import React from "react";
import { Button } from "antd";

const ButtonSubmit = ({ title, onClick }) => {
  return (
    <Button className="button button-submit" onClick={() => onClick()}>
      {title}
    </Button>
  );
};
export default ButtonSubmit;
