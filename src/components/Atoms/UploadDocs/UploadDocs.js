import React, { useState } from "react";
import uploadSvg from "assets/images/upload.svg";
import deleteSvg from "assets/images/delete.svg";
import fileSvg from "assets/images/file.svg";
import ModalEndSubmit from "components/Organisms/Modals/ModalEndSubmit/ModalEndSubmit";
import { EyeOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const UploadDocs = ({ titleButton, handleOk, fileOk }) => {
  const [imageUrl, setImageUrl] = useState(undefined);
  const [file, setFile] = useState();

  function handleChangeFile(event) {
    setFile(event.target.files[0]);
    getBase64(event.target.files[0], (url) => {
      setImageUrl(url);
    });
  }
  return (
    <div className="UploadDocs">
      <div
        className={`felx-btw UploadDocs--container ${
          fileOk && "content-flex"
        }`}>
        <div className="input-content">
          <div className="white" />
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png,image/jpg,image/jpeg"
          />
          {imageUrl ? (
            <div className="cont-img">
              <img src={imageUrl} alt="avatar" className="avatar-pre" />
            </div>
          ) : (
            <div className="empty-input">
              <img src={uploadSvg} alt="upload" className="upload" />
              <p className="body-small body-small-w6">
                Drag and drop files, or <span className="blue">Browse</span>
              </p>
              <p className="small-detail">Supports png or jpeg files</p>
            </div>
          )}
        </div>
        {fileOk && (
          <div className="file-ok">
            <div className="file">
              <div className="circle">
                <img src={uploadSvg} alt="upload" className="upload" />
              </div>
              <div className="file-content">
                <div className="flex-btw">
                  <div className="flex">
                    <img className="fileIcon" alt="fileIcon" src={fileSvg} />
                    <span>id1.jpg</span>
                  </div>
                  <div className="flex">
                    <EyeOutlined />
                    <img src={deleteSvg} alt="delete" className="delete" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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
