import React from 'react';
import ModalHeader from './header.jsx';
import ModalContainer from './container.jsx';

const Modal = ({ title = '', logo, img }) => {
  return (
    <div className="modal">
      <ModalHeader title={title} logo={logo} />
      <ModalContainer img={img} />
    </div>
  );
};

export default Modal;
