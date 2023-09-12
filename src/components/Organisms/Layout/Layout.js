import React from "react";
import Header from "../../Atoms/Headers/Header/Header";
import BarLogin from "../../Atoms/Headers/BarLogin/BarLogin";

const Layout = ({ children }) => {
  return (
    <section className="Layout">
      <BarLogin />
      <div className="content">
        <Header />
        {children}
      </div>
    </section>
  );
};
export default Layout;
