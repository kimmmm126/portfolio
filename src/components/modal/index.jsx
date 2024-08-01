import React from 'react';
import ModalHeader from './header.jsx';
import ModalContainer from "./container.jsx";

const Modal = ({title = '', icons = [], img}) => {
  return (
    <div className="modal">
      <ModalHeader title={title} icons={icons} />
      <ModalContainer img={img} />
    </div>
  );
}

export default Modal;