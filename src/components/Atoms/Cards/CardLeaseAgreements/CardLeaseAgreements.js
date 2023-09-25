import React from "react";
import UploadDocs from "components/Atoms/UploadDocs/UploadDocs";

const CardLeaseAgreements = () => {
  const handleOk = () => {
    console.log("open modal success");
  };
  return (
    <div className="CardLeaseAgreements">
      <article className="flex-btw">
        <p className="h4">Lease agreements</p>
        <p className="h4 h4-w4">
          Occupied units: <span className="h4">8</span>
        </p>
      </article>
      <article className="flex-btw">
        <p className="body-card">Submitted leases</p>
        <div className="flex">
          <div className="circle circle--active" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </article>
      <UploadDocs
        titleButton="Add at least one lease agreement to submit"
        handleOk={handleOk}
        fileOk={true}
      />
    </div>
  );
};
export default CardLeaseAgreements;
