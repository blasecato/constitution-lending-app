import React, { useState } from "react";
import { Button, Modal } from "antd";
import InReview from "./components/InReview/InReview";
import UnderWriting from "./components/UnderWriting/UnderWriting";
import AddDocs from "./components/AddDocs/AddDocs";
import HomePng from "assets/images/home-yellow-png.png";
import cortPng from "assets/images/cort.png";

const ModalCardState = ({ title, titleButton, state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="ModalCardState">
      <Button
        className="ModalCardState_button-open-modal button button-link"
        onClick={showModal}>
        {titleButton}
      </Button>
      <Modal
        className="modal-review-task"
        open={isModalOpen}
        onOk={handleOk}
        maskStyle={{
          background: "rgba(0, 0, 0, 0.60)",
          backdropFilter: "blur(2px)",
        }}
        onCancel={handleCancel}>
        <div className="modal-review-task__content">
          <div className="modal-title">
            <h3 className="body-card body-card-w6">{title}</h3>
            <Button className="body-card" onClick={handleOk}>
              Close X
            </Button>
          </div>
        </div>
        {state === "inReview" && <InReview />}
        {state === "addDocs" && <AddDocs handleOk={handleOk} />}
        {state === "upload" && (
          <UnderWriting
            title="You told us you’ve purchased/sold 3-6 real estate properties in the past 24 months"
            cuestion="Is this correct?"
            handleOk={handleOk}
            icon={HomePng}
            options={[
              { id: 1, title: "Yes" },
              { id: 1, title: "No" },
            ]}
            // type="question"
            // type="upload"
            type="uploadHUDs"
          />
        )}
        {state === "beginTask" && (
          <div>
            <UnderWriting
              title="You’ll need property and casualty insurance for us to close your loan"
              cuestion="Would you like an insurance quote from our partner, Steadily Insurance?"
              text="If not, you’ll need to give us the contact information for your agent so we can reach out and make sure you’re insured"
              handleOk={handleOk}
              icon={cortPng}
              options={[
                { id: 1, title: "Yes, give me a quote" },
                { id: 1, title: "No, I already have an insurance agent" },
              ]}
              // type="question"
              type="cardCompany"
              // type="upload"
              // type="uploadHUDs"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};
export default ModalCardState;
