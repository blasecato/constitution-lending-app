import React from "react";
import { Button } from "antd";
import checkSvg from "assets/images/check-circle.svg";
import homeGreyEmptySvg from "assets/images/home-grey-empty.svg";
import alertSvg from "assets/images/alert-circle.svg";
import clockSvg from "assets/images/clock.svg";
import ProgressCard from "../../ProgressCard/ProgressCard";
import ModalCardState from "../../../Organisms/Modals/ModalCardState/ModalCardState";

const CardLoanTasks = ({ task }) => {
  console.log("yassssss", task.state);
  return (
    <article className={`CardLoanTasks CardLoanTasks-${task.state}`}>
      <div className="CardLoanTasks__top">
        <div className="CardLoanTasks__top__head">
          <div className="state">
            {task.state === "approved" && (
              <img src={checkSvg} alt="check" className="check" />
            )}
            {task.state === "inReview" && (
              <img src={clockSvg} alt="check" className="check" />
            )}
            {task.state === "error" && (
              <img src={alertSvg} alt="check" className="check" />
            )}
            <span className="body-small body-small-w6">{task.stateTitle}</span>
          </div>
          <div className="flex-end">
            {task.typeTask === "quick task" && (
              <svg className="svg-grid quick-task">
                <path d="M5 1.5H1.5V5H5V1.5Z" />
                <path d="M10.5 1.5H7V5H10.5V1.5Z" />
                <path d="M10.5 7H7V10.5H10.5V7Z" />
                <path d="M5 7H1.5V10.5H5V7Z" />
              </svg>
            )}
            {task.typeTask === "Major task" && (
              <svg className="svg-grid major-task">
                <path d="M5 1.5H1.5V5H5V1.5Z" />
                <path d="M10.5 1.5H7V5H10.5V1.5Z" />
                <path d="M10.5 7H7V10.5H10.5V7Z" />
                <path d="M5 7H1.5V10.5H5V7Z" />
              </svg>
            )}
            <span className="body-small body-small-up">{task.typeTask}</span>
            <img src={homeGreyEmptySvg} className="home" alt="home" />
          </div>
        </div>
        <h4 className="h4">{task.title}</h4>
        <div className="text">
          <p className="body-card">{task.text}</p>
          {task.textBold && (
            <p className="body-card body-card--green">{task.textBold}</p>
          )}
        </div>
        {task.progress >= 0 && <ProgressCard progress={task.progress} />}
        {task.text2 && (
          <p className="body-card body-card-text-2">{task.text2}</p>
        )}
      </div>
      <div className="CardLoanTasks__bottom">
        {task.state === "beginTask" && (
          <ModalCardState
            title="APPROVAL | MORTGAGE PAYMENTS"
            titleButton="Begin task"
            state="beginTask"
          />
        )}
        {task.state === "approved" && (
          <div>
            <p className="body-small body-small-up">Current contact</p>
            <div className="flex-betwen">
              <p className="body-card body-card-w5">{task.contacName}</p>
              <p className="body-card">{task.contacEmail}</p>
              <p className="body-card">{task.contacPhone}</p>
            </div>
          </div>
        )}
        {task.state === "addDocs" && (
          <div>
            <div className="flex-betwen">
              <ModalCardState
                title="ADD ADDITIONAL DOCUMENT"
                titleButton="Add docs"
                state="addDocs"
              />
              <Button className="button button-link">View doc list</Button>
            </div>
          </div>
        )}
        {task.state === "incomplete" && (
          <div>
            <div className="flex-betwen">
              <ModalCardState
                title="ADD ADDITIONAL DOCUMENT"
                titleButton="Add docs"
                state="addDocs"
              />
              <Button className="button button-link">View doc list</Button>
            </div>
          </div>
        )}
        {task.state === "error" && (
          <div>
            <div className="flex-betwen">
              <ModalCardState
                title="PREAPPROVAL | MINIMUM LIQUIDITY"
                titleButton="Resolve issues"
                state="preapproval"
              />
              <Button className="button button-link">View doc list</Button>
            </div>
          </div>
        )}
        {task.state === "upload" && (
          <div>
            <div className="flex-betwen">
              <ModalCardState
                title="UNDERWRITING | ACH PAYMENT FORM"
                titleButton="Upload"
                state="upload"
              />
              <Button className="button button-link">See sample</Button>
            </div>
          </div>
        )}
        {task.state === "inReview" && (
          <div>
            <p className="body-small body-small-up">Current contact</p>
            <p className="body-card body-card-w5">
              Ricardo Sims, Mervet Taha, Edgar Allen Poe
            </p>
            <ModalCardState
              title="APPROVAL | ENTITY AND GUARANTOR CREATION"
              titleButton="View task"
              state="inReview"
            />
          </div>
        )}
      </div>
    </article>
  );
};
export default CardLoanTasks;
