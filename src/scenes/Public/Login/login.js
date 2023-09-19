import React from "react";
import { Link } from "react-router-dom";
import CoinPng from "assets/images/coin-shadow.png";
import screenPng from "assets/images/screenshop.png";
import Layout from "../components/Layout/Layout";
import FormLogin from "./components/FormLogin";

const Login = () => {
  return (
    <Layout>
      <div className="Login">
        <div className="Login-form">
          <img src={CoinPng} className="coin" alt="coin" />
          <h1 className="h1">Welcome back!</h1>
          <FormLogin />
          <Link className="body-regular link-absolute" to="./">
            Don’t have an account?{" "}
            <span className="body-regular-bold">Sign up</span>
          </Link>
        </div>
        <div className="rigth">
          <div className="">
            <h2 className="h2">
              Testimonial goes here Testimonial goes here Testimonial goes here
              Testimonial goes here Testimonial goes here
            </h2>
            <p className="body-regular">
              <span className="body-regular-bold">— Ricardo Sims,</span> Title
              @company
            </p>
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
export default Login;
