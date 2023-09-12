import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

const Private = () => {
  return (
    <div className="Private">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default Private;
