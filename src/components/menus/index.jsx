import React from "react";

const Menus = ({menuList, type}) => {
  return (
    <div className='menus'>
      {menuList
        .filter((menu) => type === menu.type)
        .map((menu) => {
        return (
          <button key={menu.idx} className="btn">
            <span className="hid">{menu.name}</span>
            <span className={`icon icon-${menu.name}`}></span>
          </button>
        )
      })}
  </div>
  )
}

export default Menus;