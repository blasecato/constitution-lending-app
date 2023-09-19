import React from "react";
import { Select } from "antd";
import UploadDocs from "components/Atoms/UploadDocs/UploadDocs";

const CardEnterDoc = ({ handleOk }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="CardEnterDoc">
      <p className="CardEnterDoc_title">Enter doc name (optional)</p>
      <p className="sub-title">
        Leave a note for our processing team (optional)
      </p>
      <p className="text">Link doc to a task (optional)</p>
      <Select
        className="select-add"
        onChange={handleChange}
        placeholder="Select task"
        options={[
          {
            value: "jack",
            label: "Entity docs | Underwriting",
          },
          {
            value: "lucy",
            label: "Entity docs | Underwriting",
          },
          {
            value: "Yiminghe",
            label: "Entity docs | Underwriting",
          },
        ]}
      />
      <UploadDocs titleButton="Submit for review" handleOk={handleOk} />
    </div>
  );
};
export default CardEnterDoc;
