import React from "react";
import Layout from "../../../components/Organisms/Layout/Layout";
import CoinPng from "../../../assets/images/coin-shadow.png";
import screenPng from "../../../assets/images/screenshop.png";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ResetPassword = () => {
  return (
    <Layout>
      <div className="Login">
        <div className="Login-form">
          <img src={CoinPng} className="coin" alt="coin" />
          <h1 className="h1">Recover your account!</h1>
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

            <Link className="body-regular link" to="./">
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
        </div>
        <div className="rigth">
          <div className="">
            <h2 className="h2">
              Testimonial goes here Testimonial goes here Testimonial goes here
              Testimonial goes here Testimonial goes here
            </h2>
            <p className="body-regular">— Ricardo Sims, Title @company</p>
          </div>
          <div className="bottom-flex">
            <div className="back">
              <img src={screenPng} className="screen" alt="screen" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ResetPassword;
