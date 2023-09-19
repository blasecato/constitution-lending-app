import React from "react";
import CoinPng from "assets/images/coin-shadow.png";
import screenPng from "assets/images/screenshop.png";
import Layout from "../components/Layout/Layout";
import FormResetPassword from "./components/FormResetPassword/FormResetPassword";

const ResetPassword = () => {
  return (
    <Layout>
      <div className="Login">
        <div className="Login-form">
          <img src={CoinPng} className="coin" alt="coin" />
          <h1 className="h1">Recover your account!</h1>
          <FormResetPassword />
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
