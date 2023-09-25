import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CardSomeoneElse = () => {
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
        <Form.Item>
          <Button className="button button-submit" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CardSomeoneElse;
