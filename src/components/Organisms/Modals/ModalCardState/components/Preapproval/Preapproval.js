import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ButtonsQuestions from "../ButtonsQuestion/ButtonsQuestion";
import BarMinimumLiquidity from "../BarMinimumLiquidity/BarMinimumLiquidity";
import CardAddNewAccount from "../AddNewAccount/AddNewAccount";
import CardErrorPay from "../CardErrorPay/CardErrorPay";

const Preapproval = ({
  title,
  options,
  type,
  handleOk,
  icon,
  text,
  listItems,
}) => {
  return (
    <div className="Preapproval">
      <div className="content-modal">
        <div className="modal-container">
          <div className="dots">
            <Button className="dots-button dots-button-active"></Button>
            <Button className="dots-button"></Button>
          </div>
          <div className="modal-cards">
            <div className="flex-btw">
              <img src={icon} className="paperPng" alt="paperPng" />
              <Button className="button button-transparent">
                <QuestionCircleOutlined />
                help docs
              </Button>
            </div>
            <h2 className="h3">{title}</h2>
            <ButtonsQuestions
              options={options}
              listItems={listItems}
              cuestion="You’ll need to show account balances totaling $XXX from any of:"
            />
            <CardAddNewAccount
              title="Bank statements"
              titleButton="Add new bank account"
              text="Upload you May 2023 and June 2023 bank account statements for each account you want to use."
            />
            <CardErrorPay
              text="Your account statements didn’t match the closing balance you claimed. Please submit an additional account, or upload new account statements showing a higher balance"
              ammountAccount={2}
              value={300000}
            />
          </div>
        </div>
      </div>
      <div className="modal-review-task__footer">
        <div className="modal-container">
          <div className="modal-cards">
            <BarMinimumLiquidity
              title="minimum liquidity"
              price="$2mm"
              percentage={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preapproval;
