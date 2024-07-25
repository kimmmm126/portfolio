import React from "react";
import { infoList, infoTxtList, topMenuList, bottomMenuList } from '../../constants/constantsData.js'
import Menus from "../../components/menus";
import Contents from '../../components/contents';

const Main = ({ img }) => {
  return (
    <main className="container">
      <div className="infoHeader">
        <h2 className="infoHeaderTitle">Porfolio</h2>
      </div>
      <hr className="divider" />
      <section className="infoBox">
        <div className="profile">
          {img
            ? <img className="profileImg center" src={img} alt="프로필" />
            : <div className="avatar" />
          }
        </div>
        <div className="infoWrap">
          <div className="infoList">
            <ul>
              {infoList.map(item => {
                const count = Math.floor(item.count / 1000);
                return (
                  <li key={item.idx}>
                    <em className="tit">{item.title}</em>
                    <span className="count">
                      {count.toLocaleString() + 'k'}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="btnWrap">
            <button className="btn follow">Follow +</button>
            <button className="btn arrow bottom">Drop Down</button>
          </div>
        </div>
        <div className="infoTxtWrap">
          {infoTxtList.map(item => (
            <p className={'txt' + (item.idx === 1 ? ' bold' : '')} key={item.idx}>
              {item.text}
            </p>
          ))}
        </div>
      </section>
      <hr className="divider" />
      <section className="contents">
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