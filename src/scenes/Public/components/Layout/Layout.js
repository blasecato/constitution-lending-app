import React from "react";
import Header from "components/Atoms/Headers/Header/Header";
import BarLogin from "components/Atoms/Headers/BarLogin/BarLogin";

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
