import React from "react";
import { useLocation } from "react-router-dom";
import { infoList, infoTxtList, btnList } from '../../constants/constantsData.js'
import Menus from "../../components/menus";
import Contents from '../../components/contents';

const Main = ({ img }) => {

  const location = useLocation();

  return (
    <main className={location.pathname === '/' ? 'main' : 'sub'}>
      <section className="infoHeader">
        <h2 className="subHeaderTilte">Porfolio</h2>
        <hr className="divider" />
      </section>
      <section className="infoBox">
        <div className="profile">
          {img
            ? <img className="profileImg" src={img} alt="프로필" />
            : <div className="avatar" />
          }
        </div>
        <div className="infoWrap">
          <div className="infoList">
            <ul>
              {infoList.map(item => (
                <li key={item.idx}>
                  <em className="tit">{item.title}</em>
                  <span className="count">{item.count.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="btnWrap">
            <button className="btn follow"><span>Follow</span></button>
            <button className="btn dropdown"><span className="arrow bottom" /></button>
          </div>
        </div>
        <div className="infoTxtWrap">
          {infoTxtList.map(item => (
            <p className={'txt ' + (item.idx === 1 ? 'bold' : item.idx === 3 ? 'icon' : '')} key={item.idx}>
              {item.text}
            </p>
          ))}
        </div>
      </section>
      <hr className="divider" />
      <section className="contents">
        <div className="topMenu">
          <Menus menuList={btnList} />
        </div>
        <div className="contentsWrap">
          <Contents />
        </div>
        <div className="bottomMenu">
          <Menus menuList={btnList} />
        </div>
      </section>
    </main>
  );
}

export default Main;