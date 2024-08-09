import React from 'react';
import { MinIcon, MaxIcon, CloseIcon } from '../../constants/svg.js';

const ModalHeader = ({ Logo = () => null, title = '', closeClick = () => {} }) => {
  return (
    <div className="modalHeader">
      {Logo && title && (
        <h2 className="title">
          <span className="logo">
            <Logo width={16} height={16} />
          </span>
          <span>{title}</span>
        </h2>
      )}
      <div className="btnWrap">
        <button className="btn btnMin">
          <span className="icon">
            <MinIcon className="icon-min" />
          </span>
        </button>
        <button className="btn btnMax">
          <span className="icon">
            <MaxIcon className="icon-max" />
          </span>
        </button>
        <button className="btn btnClose" onClick={closeClick}>
          <span className="icon">
            <CloseIcon className="icon-close" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ModalHeader;
