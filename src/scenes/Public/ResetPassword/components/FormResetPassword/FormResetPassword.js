import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormResetPassword = () => {
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

      <Link className="body-regular link" to="/">
        Do you already have an account ?{" "}
        <span className="body-regular-bold">Login</span>
      </Link>

      <Form.Item>
        <Button
          className="button button-primary button-txt-big"
          htmlType="submit">
          Reset password
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormResetPassword;
