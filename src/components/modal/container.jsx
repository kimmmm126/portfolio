import React, { useState } from 'react';
import { infoList, infoTxtList, itemList, MenuList } from '../../constants/data.js';
import Menus from '../../components/menus';
import Items from '../../components/items';
import Contents from '../../components/contents';

const ModalContainer = ({ img }) => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeClick = () => {
    setOpen(false);
  };

  return (
    <div className="modalContainer">
      <div className="title">
        <h2>Porfolio</h2>
      </div>
      <div className="divider" />
      <div className="contents">
        <div className="contentsTop">
          <div className="profile">
            {img ? <img className="profileImg " src={img} alt="프로필" /> : <div className="avatar" />}
          </div>
          <div className="infoBox">
            <div className="infoBoxList">
              <ul>
                {infoList.map(item => {
                  const count = Math.floor(item.count / 1000);
                  return (
                    <li key={item.idx}>
                      <em className="tit">{item.name}</em>
                      <span className="count">{item.count >= 1000 ? count.toLocaleString() + 'k' : item.count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="btnWrap">
              <button className="btn btnFollow">
                <span>Follow +</span>
              </button>
              <button onClick={handleClick} className="btn btnToggle">
                <span className="hid">Drop Down</span>
                <i className={`icon-arrow${isActive ? '-up' : '-down'}`}></i>
              </button>
            </div>
          </div>
          {isActive && <Items itemList={itemList} closeClick={closeClick} />}
          <div className="txtBox">
            {infoTxtList.map(item => (
              <p className={'txt' + (item.idx === 1 ? ' bold' : '')} key={item.idx}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="contentsBottom">
          <div className="topMenu">
            <Menus menuList={MenuList} type="top" />
          </div>
          <Contents />
          <div className="bottomMenu">
            <Menus menuList={MenuList} type="bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
