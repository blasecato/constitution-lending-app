import React from "react";
import Header from "scenes/Public/components/Header/Header";
import logoPng from "assets/images/Const Lending.png";

const Layout = ({ children }) => {
  return (
    <section className="Layout">
      <div className="BarLogin">
        <img src={logoPng} alt="logo" className="logo" />
      </div>
      <div className="content">
        <Header />
        {children}
      </div>
    </section>
  );
};
export default Layout;
