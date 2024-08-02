import React from 'react';
import ModalHeader from './header.jsx';
import ModalContainer from './container.jsx';

const Modal = ({ title = '', logo, img, closeClick }) => {
  return (
    <div className="modal">
      <div className='modalInner'>
        <ModalHeader title={title} logo={logo} closeClick={closeClick}/>
        <ModalContainer img={img} />
      </div>
    </div>
  );
};

export default Modal;
