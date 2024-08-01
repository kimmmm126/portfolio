import React, { useState } from "react";
import { infoList, infoTxtList, itemList, MenuList } from '../../constants/data.js'
import Menus from "../../components/menus";
import InfoItemBox from '../../components/infoItemBox';
import Contents from '../../components/contents';

const ModalContainer = ({img}) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div className="container">
      <div className="title">
        <h2>Porfolio</h2>
      </div>
      <div className="contents">
        <hr className="divider" />
        <div className="contentsTop">
          <div className="profile">
            {img
              ? <img className="profileImg center" src={img} alt="프로필" />
              : <div className="avatar" />
            }
          </div>
          <div className="infoBox">
            <div className="infoBoxList">
              <ul>
                {infoList.map(item => {
                  const count = Math.floor(item.count / 1000);
                  return (
                    <li key={item.idx}>
                      <em className="tit">{item.name}</em>
                      <span className="count">
                        {item.count >= 1000 ? count.toLocaleString() + 'k' : item.count}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="btnWrap">
              <button className="btn follow">Follow +</button>
              <button onClick={handleClick} className={"btn arrow" + (isActive ? ' up' : ' down')}>Drop Down</button>
            </div>
          </div>
          {isActive &&
            <InfoItemBox itemList={itemList} />
          }
          <div className="txtBox">
            {infoTxtList.map(item => (
              <p className={'txt' + (item.idx === 1 ? ' bold' : '')} key={item.idx}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <hr className="divider" />
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
  )
}

export default ModalContainer;