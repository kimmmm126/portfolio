import React from "react";

const Menus = ({menuList, type}) => {
  return (
    <div className='menus'>
      {menuList
        .filter((menu) => type === menu.type)
        .map((menu) => {
        return (
          <button key={menu.idx} className={`btn icon ${menu.name}`}>
            {menu.name}
          </button>
        )
      })}
  </div>
  )
}

export default Menus;