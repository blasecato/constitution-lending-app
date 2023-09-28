import React, { useState } from "react";
import { Button, Modal, Checkbox } from "antd";
import coinPng from "assets/images/coin-shadow.png";

const ModalEndSubmit = ({
  title,
  titleButton,
  text,
  handleOk,
  textButtonSubmit,
  textButtonCancel,
  text2,
  title2,
  icon,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckBox] = useState(false);
  const showModal = () => {
    handleOk();
    setIsModalOpen(true);
  };
  const handleModalOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <section className="ModalEndSubmit">
      <Button
        className="ModalEndSubmit_button-open-modal button button-submit"
        onClick={showModal}>
        {titleButton}
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleModalOk}
        maskStyle={{
          background: "rgba(0, 0, 0, 0.60)",
          backdropFilter: "blur(2px)",
        }}
        onCancel={handleCancel}
        className={`modal-end-submit ${className}`}>
        <div className="modal-end-submit__content">
          {icon ? (
            <img className="coin" alt="coin" src={icon} />
          ) : (
            <img className="coin" alt="coin" src={coinPng} />
          )}
          <h2 className="h2">{title}</h2>
          <h4 className="h4 h4-w4">{text}</h4>
          {title2 && (
            <div className="divider">
              <h2 className="h2">{title2}</h2>
              <h4 className="h4 h4-w4">{text2}</h4>
            </div>
          )}
          <div className="buttons">
            <Button className="button button-modal-ok">
              {textButtonSubmit}
            </Button>
            <Button className="button button-modal-cancel">
              {textButtonCancel}
            </Button>
          </div>
          {isCheckBox && (
            <Checkbox onChange={onChange}>
              Don’t show this message again for this task
            </Checkbox>
          )}
        </div>
      </Modal>
    </section>
  );
};
export default ModalEndSubmit;
