import React from "react";
import paperPng from "assets/images/paper.png";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CardEnterDoc from "./CardEnterDoc";

const AddDocs = ({ handleOk }) => {
  return (
    <div className="content-modal">
      <div className="modal-container">
        <div className="modal-cards">
          <img src={paperPng} className="paperPng" alt="paperPng" />
          <h2 className="h2">Add another document</h2>
          <div className="text">
            <span className="h4 h4-w4">
              Think we missed something that’s relevant to your loan? Add it
              here
            </span>
          </div>
          <CardEnterDoc handleOk={handleOk} />
          <Button className="button button-transparent">
            <PlusCircleOutlined />
            <span>Add another doc</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddDocs;
