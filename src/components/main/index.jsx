import React from "react";
import { useLocation } from "react-router-dom"

const infoList = [
  {
    idx : 1,
    title : 'Posts',
    count : 1000,
  },
  {
    idx : 2,
    title : 'Posts',
    count : 1000,
  },
  {
    idx : 3,
    title : 'Posts',
    count : 1000,
  }
]


const Main = ({ img }) => {

  const location = useLocation();

  return (
    <main className={location.pathname === '/' ? 'main' : 'sub'}>
      <section>
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
                  <span className="count">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="btnWrap">
            <button className="btn follow"><span>Follow</span></button>
            <button className="btn dropdown"><span className="arrow bottom" /></button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;