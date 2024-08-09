import React from "react";
import ModalHeader from "./header.jsx";
import ModalContainer from "./container.jsx";

const Modal = ({ title = "", logo, img, closeClick }) => {
  return (
    <div className="modal">
        <ModalHeader title={title} Logo={logo} closeClick={closeClick} />
        <ModalContainer img={img} />
    </div>
  );
};

export default Modal;
