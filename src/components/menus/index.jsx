import React from "react";

const Menus = ({ menuList }) => {
  return (
    <div className='menus'>
      {menuList.map((menu) => <button key={menu.idx} className={'btn icon ' + menu.name}>{menu.name}</button>)}
    </div >
  )
}

export default Menus;