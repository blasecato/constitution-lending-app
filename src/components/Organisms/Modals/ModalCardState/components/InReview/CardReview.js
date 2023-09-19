import React from "react";
import checkSvg from "assets/images/check-al.svg";

const CardReview = () => {
  return (
    <div className="CardReview">
      <div className="label">
        <img src={checkSvg} className="checkSvg" alt="checkSvg" />
        <span>IN REVIEW</span>
      </div>
      <div className="row">
        <div className="row-left">
          <div className="column">
            <p className="body-card">First name</p>
            <span className="button-txt-big">Edgar</span>
          </div>
          <div className="column">
            <p className="body-card ">Last name</p>
            <span className="button-txt-big">Poe</span>
          </div>
        </div>
        <div className="row-rigth">
          <div className="column">
            <p className="body-card">Ownership</p>
            <span className="button-txt-big">90%</span>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table-row">
          <div className="column">
            <p className="body-card ">SSN</p>
            <span className="body-card body-card-w5">***-**-2390</span>
          </div>
          <div className="column">
            <p className="body-card">Date of birth</p>
            <span className="body-card body-card-w5">32/32/2312</span>
          </div>
        </div>
        <div className="table-row">
          <div className="column">
            <p className="body-card">Phone number</p>
            <span className="body-card body-card-w5">329-230-2390</span>
          </div>
          <div className="column">
            <p className="body-card ">Email address</p>
            <span className="body-card body-card-w5">
              ricardo@mervetscoolbiz.com
            </span>
          </div>
        </div>
        <div className="table-row">
          <div className="column">
            <p className="body-card">Home address</p>
            <span className="body-card body-card-w5">
              356 14th St. San Francisco, CA 93201
            </span>
          </div>
        </div>
        <div className="table-row">
          <div className="column">
            <p className="body-card">Proof of identification</p>
            <div className="card-view-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardReview;
