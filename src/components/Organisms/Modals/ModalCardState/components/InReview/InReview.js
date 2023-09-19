import React from "react";
import { Button } from "antd";
import cuestionPurpleSvg from "assets/images/cuestion-purple.svg";
import clockSvg from "assets/images/clock.svg";
import linceSvg from "assets/images/lince.svg";
import CardReview from "./CardReview";

const InReview = () => {
  return (
    <>
      <div className="content-modal">
        <div className="modal-container">
          <div className="dots">
            <Button className="dots-button dots-button-success"></Button>
            <Button className="dots-button"></Button>
            <Button className="dots-button dots-button-active"></Button>
          </div>
          <div className="modal-cards">
            <div className="modal-title">
              <div className="title">
                <img src={clockSvg} className="cuestion" alt="cuestion" />
                <span className="body-regular body-regular-w5">
                  <span className="body-regular-bold">IN REVIEW |</span> Editing
                  locked
                </span>
              </div>
              <Button className="body-small">
                <img
                  src={cuestionPurpleSvg}
                  className="cuestion"
                  alt="cuestion"
                />
                help docs
              </Button>
            </div>
            <h2 className="h2">
              Who are the owners of{" "}
              <span className="h2-w8">My Really Cool Biz</span>?
            </h2>
            <div className="text">
              <span className="h4 h4-w4">
                Anyone with at least 20% ownership will automatically be added
                as a guarantor on the loan and we’ll need to run a credit and
                background check on them.
                <a className="h4" href="./">
                  Learn more
                </a>
              </span>
            </div>
            <CardReview />
            <CardReview />
          </div>
        </div>
      </div>
      <div className="modal-review-task__footer">
        <div className="modal-container">
          <div className="modal-cards">
            <h3 className="h4 h4-w4">
              My entity is <span className="h4">My Really Cool Biz</span>
            </h3>
            <div className="flex">
              <h4 className="h4 h4-w5">Owners</h4>
              <div className="circles">
                <div className="circle circle-active"></div>
                <div className="circle">
                  <img src={linceSvg} alt="lince" className="icon" />
                </div>
                <div className="circle">
                  <img src={linceSvg} alt="lince" className="icon" />
                </div>
                <div className="circle">
                  <img src={linceSvg} alt="lince" className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InReview;
