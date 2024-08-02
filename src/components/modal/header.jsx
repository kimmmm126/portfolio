import React from 'react';
import { MinIcon, MaxIcon, CloseIcon } from '../../constants/svg.js';

const ModalHeader = ({ logo, title, closeClick }) => {
  return (
    <div className="header">
      <div className="headerContanier">
        <div className="headerTop">
          <h2 className="title">
            <span className="logo">{logo()}</span>
            <span>{title}</span>
          </h2>
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
        <div className="headerBottom">
          <div className="gnb">
            <nav>
              <ul>
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>File</span>
                </li>
                <li>
                  <span>View</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;
