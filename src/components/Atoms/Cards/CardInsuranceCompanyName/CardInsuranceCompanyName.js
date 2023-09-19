import ModalEndSubmit from "components/Organisms/Modals/ModalEndSubmit/ModalEndSubmit";
import React from "react";

const CardInsuranceCompanyName = ({ handleOk }) => {
  return (
    <div className="CardInsuranceCompanyName">
      <h4 className="h4">Insurance company name</h4>
      <p className="body-card">Contact name (if different from lender)</p>
      <p className="body-regular body-regular-w5">Mar|</p>
      <div className="flex-btw">
        <div className="column">
          <p className="body-card">Phone number</p>
          <p className="body-regular body-regular-italic">329-230-2390</p>
        </div>
        <div className="column">
          <p className="body-card">Email address</p>
          <p className="body-regular body-regular-italic">
            ricardo@mervetscoolbiz.com
          </p>
        </div>
      </div>
      <ModalEndSubmit
        titleButton="Submit for review"
        handleOk={handleOk}
        title="Your change request has been submitted"
        text="We’ll reach out if your loan needs to be adjusted, otherwise check back in a few days for next steps"
        title2="Before we move to the next approval task, do you have HUDs for your properties handy?"
        text2="We don’t need them right now, but we’ll need them to get final approval on your loan"
        textButtonSubmit="Go to next task"
        textButtonCancel="Back to dashboard"
      />
    </div>
  );
};
export default CardInsuranceCompanyName;
