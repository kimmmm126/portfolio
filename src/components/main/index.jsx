import React, { useState } from "react";
import { infoList, infoTxtList, topMenuList, bottomMenuList, itemList } from '../../constants/constantsData.js'
import Menus from "../../components/menus";
import InfoItemBox from '../../components/infoItemBox';
import Contents from '../../components/contents';


const Main = ({ img }) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <main className="container">
      <div className="infoHeader">
        <h2 className="title">Porfolio</h2>
      </div>
      <hr className="divider" />
      <section className="infoContainer">
        <div className="infoProfile">
          {img
            ? <img className="profile center" src={img} alt="프로필" />
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
        <div className="infoTxt">
          {infoTxtList.map(item => (
            <p className={'txt' + (item.idx === 1 ? ' bold' : '')} key={item.idx}>
              {item.text}
            </p>
          ))}
        </div>
      </section>
      <hr className="divider" />
      <section className="infoContents">
        <div className="topMenu">
          <Menus menuList={topMenuList} />
        </div>
        <Contents />
        <div className="bottomMenu">
          <Menus menuList={bottomMenuList} />
        </div>
      </section>
    </main >
  );
}

export default Main;