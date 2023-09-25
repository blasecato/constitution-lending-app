import React from "react";

const CardAlertError = ({ title, text }) => {
  return (
    <div className="CardAlertError">
      <p className="h4 h4-w5">{title}</p>
      <p className="h4 h4-w4">{text}</p>
    </div>
  );
};
export default CardAlertError;
