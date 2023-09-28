import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CardAddAccont from "../CardAddAccont/CardAddAccount";

const CardAddNewAccount = ({ title, text, titleButton }) => {
  const [isUpdateActive, setUpdateActive] = useState(false);

  return (
    <div className="CardAddNewAccount">
      <h4 className="h4">{title}</h4>
      {text && <p className="body-regular">{text}</p>}
      <Button
        className="button button-transparent"
        onClick={() => setUpdateActive(!isUpdateActive)}>
        <PlusCircleOutlined />
        {titleButton}
      </Button>
      {isUpdateActive && <CardAddAccont />}
    </div>
  );
};
export default CardAddNewAccount;
