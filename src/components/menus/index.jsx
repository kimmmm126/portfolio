import React from "react";

const Menus = ({ menuList }) => {
  return (
    <div className='menus'>
      {menuList.map((menu) => <button key={menu.name} className={'btn icon2 ' + menu.name}>{menu.name}</button>)}
    </div >
  )
}

export default Menus;