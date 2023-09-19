import React from "react";
import { Button, Upload } from "antd";
import uploadSvg from "assets/images/upload.svg";
import ModalEndSubmit from "components/Organisms/Modals/ModalEndSubmit/ModalEndSubmit";

const UploadDocs = ({ titleButton, handleOk }) => {
  return (
    <div className="UploadDocs">
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        directory>
        <Button className="button-upload">
          <img src={uploadSvg} alt="upload" className="upload" />
          <p>
            Drag and drop files, or <span>Browse</span>
          </p>
          <span>Supports png or jpeg files</span>
        </Button>
      </Upload>
      <ModalEndSubmit
        titleButton={titleButton}
        handleOk={handleOk}
        title="Your change request has been submitted"
        text="We’ll reach out if your loan needs to be adjusted, otherwise check back in a few days for next steps"
        // title2="Before we move to the next approval task, do you have HUDs for your properties handy?"
        // text2="We don’t need them right now, but we’ll need them to get final approval on your loan"
        textButtonSubmit="Go to next task"
        textButtonCancel="Back to dashboard"
      />
      {/* <Button className="button button-submit">{titleButton}</Button> */}
    </div>
  );
};
export default UploadDocs;
