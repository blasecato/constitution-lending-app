import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import UploadDocs from "components/Atoms/UploadDocs/UploadDocs";
import React, { useState } from "react";

const CardAddAccont = () => {
  const [isTextActive, setTextActive] = useState(false);
  return (
    <div className="CardAddAccont">
      <div className="flex-btw">
        <div className="box">
          <h4 className="h4 h4-w6">Name your account</h4>
          <p className="body-card">Latest documented balance</p>
          <h4 className="h4 h4-w6">Enter amount</h4>
          <p className="body-card">Upload 2 statements to submit</p>
        </div>
        <div className="box">
          <UploadDocs />
        </div>
      </div>
      <Button
        className="button button-empty"
        onClick={() => setTextActive(!isTextActive)}>
        HAS YOUR BALANCE INCREASED SINCE YOUR LATEST STATEMENT? (OPTIONAL)
        <DownOutlined />
      </Button>
      {isTextActive && (
        <p className="body-card">
          If your account balance has recently increased, you can use the higher
          amount to meet this requirement. <br />
          <br /> Upload your transaction history from the date of your last
          statement to the current date along with the 2 statements. Re-enter
          the highest balance and we’ll use that for our liquidity calculations.
        </p>
      )}
    </div>
  );
};
export default CardAddAccont;
