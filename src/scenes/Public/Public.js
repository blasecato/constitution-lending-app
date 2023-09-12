import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/login";
import ResetPassword from "./ResetPassword/ResetPassword";

const Public = () => {
  return (
    <div className="Public">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};
export default Public;
