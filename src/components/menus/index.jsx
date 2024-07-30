import React from "react";

const Menus = ({ icons }) => {
  return (
    <div className='menus'>
      {icons.map(({icon, name}) =>
        <button key={name} className='btn'>
          <span className={`icon ${name}`}>{icon(name)}</span>
        </button>
      )}
    </div >
  )
}

export default Menus;