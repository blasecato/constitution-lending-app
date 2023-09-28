import React from "react";
import { Form, Input } from "antd";
import calendarPng from "assets/images/calendar.png";
import ModalEndSubmit from "components/Organisms/Modals/ModalEndSubmit/ModalEndSubmit";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CardSomeoneElse = ({ handleOk }) => {
  return (
    <div className="CardSomeoneElse">
      <h4 className="h4">Someone else</h4>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <div className="row">
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input placeholder="First name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input placeholder="Last name" />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input placeholder="Phone number" />
        </Form.Item>
        <ModalEndSubmit
          titleButton="Submit and complete task"
          title="Ready to submit?"
          handleOk={handleOk}
          icon={calendarPng}
          textButtonSubmit="Yes, this is correct"
          textButtonCancel="I want to make changes"
          className="modal-end-submit--white"
          text="After submitting, you’ll have to contact us if you want to make changes to the property access details"
        />
      </Form>
    </div>
  );
};
export default CardSomeoneElse;
