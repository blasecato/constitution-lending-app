import React from "react";
import arrowPng from "assets/images/arrow-blue.png";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import UploadDocs from "components/Atoms/UploadDocs/UploadDocs";
import { Link } from "react-router-dom";
import CardInsuranceCompanyName from "components/Atoms/Cards/CardInsuranceCompanyName/CardInsuranceCompanyName";
import CardEstimatedDSCR from "components/Atoms/Cards/CardEstimatedDSCR/CardEstimatedDSCR";
import InputAmount from "components/Atoms/Inputs/InputAmount/InputAmount";
import CardMarketRent from "components/Atoms/Cards/CardMarketRent/CardMarketRent";
import CardLeaseAgreements from "components/Atoms/Cards/CardLeaseAgreements/CardLeaseAgreements";
import CustomInput from "components/Atoms/Inputs/CustomInput/CustomInput";
import ButtonSubmit from "components/Atoms/Buttons/ButtonSubmit";
import CardCreditCard from "components/Atoms/Cards/CardCreditCard/CardCreditCard";
import CardDetailInformationBank from "components/Atoms/Cards/CardDetailInformationBank/CardDetailInformationBank";
import CardAlertError from "components/Atoms/Cards/CardAlertError/CardAlertError";
import CardSomeoneElse from "components/Atoms/Cards/CardSomeoneElse/CardSomeoneElse";

const UnderWriting = ({
  title,
  cuestion,
  options,
  type,
  handleOk,
  icon,
  text,
}) => {
  return (
    <div className="UnderWriting">
      <div className="content-modal">
        <div className="modal-container">
          <div className="dots">
            <Button className="dots-button dots-button-active"></Button>
            <Button className="dots-button"></Button>
          </div>
          <div className="modal-cards">
            <div className="flex-btw">
              <img src={icon} className="paperPng" alt="paperPng" />
              <Button className="button button-transparent">
                <QuestionCircleOutlined />
                help docs
              </Button>
            </div>
            <h2 className="h3">{title}</h2>
            {type === "question" && (
              <>
                <p className="h2">{cuestion}</p>
                {text && <p className="h4 h4-w4 title-text">{text}</p>}
                <div className="options">
                  {options?.map((option) => (
                    <Button className="Button-option" key={option.id}>
                      {option.title}
                    </Button>
                  ))}
                </div>
              </>
            )}
            {type === "upload" && (
              <div className="cardUpload">
                <h4 className="h4">
                  Details of properties you’ve purchased/sold
                </h4>
                <p className="body-regular">
                  Fill out our template and upload it here. We’ll use this to
                  get preliminary verification of your experience.
                </p>
                <Link className="body-regular-w6" to="./">
                  Download template
                  <img className="arrow-blue" alt="arrow-blue" src={arrowPng} />
                </Link>
                <UploadDocs
                  titleButton="Submit for review"
                  handleOk={handleOk}
                />
              </div>
            )}
            {type === "uploadHUDs" && (
              <div className="">
                <span className="placeholder placeholder-link">
                  Don’t remember which properties we’re referring to?{" "}
                  <Link className="link">
                    View the list of properties you used to verify your
                    experience{" "}
                    <img src={arrowPng} alt="arrowPng" className="arrowPng" />
                  </Link>
                </span>
                <div className="cardUpload">
                  <div className="flex-btw">
                    <h4 className="h4">Property HUDs</h4>
                    <p className="h4 h4-w4">
                      Past properties: <span className="h4">3</span>
                    </p>
                  </div>
                  <div className="flex-btw">
                    <h4 className="body-card">Submitted HUDs</h4>
                    <div className="circles">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </div>
                  <UploadDocs
                    titleButton="Add at least one HUD to submit"
                    handleOk={handleOk}
                  />
                </div>
              </div>
            )}
            {type === "cardCompany" && (
              <div>
                <CardInsuranceCompanyName handleOk={handleOk} />
                <Link className="body-regular body-regular-up body-regular-w6">
                  I want to upload my own insurance docs
                </Link>
                <div className="cardCompany">
                  <UploadDocs
                    titleButton="Upload docs to submit"
                    handleOk={handleOk}
                  />
                </div>
                <div className="">
                  <CardEstimatedDSCR />
                  <InputAmount
                    title="How many units are in the property?"
                    type="operation"
                    // type="text"
                    text="Automatically calculated"
                  />
                  <CardLeaseAgreements />
                  <CardMarketRent />
                  <CustomInput />
                  <ButtonSubmit title="Submit for review" />
                  <CardCreditCard />
                  <CardDetailInformationBank />
                  <CardAlertError
                    title="No"
                    text="Changing your experience could change your loan terms"
                  />
                  <CardSomeoneElse />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal-review-task__footer">
        <div className="modal-container">
          <div className="modal-cards">
            <h3 className="h4 h4-w4">
              I’ve purchased/sold <span className="h4">3-6</span> real estate
              properties in the past 24 months
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnderWriting;
