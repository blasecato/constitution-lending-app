import React from "react";
import ButtonSubmit from "components/Atoms/Buttons/ButtonSubmit";

const CardDetailInformationBank = () => {
  return (
    <div className="CardDetailInformationBank">
      <h4 className="h4">ACH (bank) details</h4>
      <div className="column column-line">
        <p className="label body-regular">Account holder name</p>
        <p className="info body-regular">Ricardo Sims</p>
      </div>
      <div className="column">
        <p className="label body-regular">Bank name</p>
        <p className="info body-regular">Discover bank</p>
      </div>
      <div className="column">
        <p className="label body-regular">Routing number</p>
        <p className="info body-regular">9342850498543</p>
      </div>
      <div className="row">
        <div className="column">
          <p className="label body-regular">Account number</p>
          <p className="info body-regular">93428504985439342</p>
        </div>
        <div className="column">
          <p className="label body-regular">Re-enter account number</p>
          <p className="info">93428504985439342</p>
        </div>
      </div>
      <div className="column">
        <p className="label body-regular">Routing number</p>
        <p className="info body-regular">9342850498543</p>
      </div>
      <ButtonSubmit title="Pay $20" />
    </div>
  );
};
export default CardDetailInformationBank;
