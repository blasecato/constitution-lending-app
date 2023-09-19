import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormLogin = () => {
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="form"
      autoComplete="off">
      <Form.Item
        name="username"
        className="form-item"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}>
        <Input placeholder="Email address" className="form-item__input" />
      </Form.Item>

      <Form.Item
        name="password"
        className="form-item"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}>
        <Input.Password placeholder="Password" className="form-item__input" />
      </Form.Item>
      <Link className="body-regular link" to="./reset-password">
        Forgot password? <span className="body-regular-bold">Reset it</span>
      </Link>

      <Form.Item>
        <Button
          className="button button-primary button-txt-big"
          htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
