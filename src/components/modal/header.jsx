import React from "react"
import { useNavigate } from "react-router-dom"
import Icons from '../../constants/svg.js'

const ModalHeader = ({ icons, title }) => {
  const navigate = useNavigate();
  return (
    <header id="header" className="header">
      <div className="headerContanier">
        <h2 className="title">
          <span className="logo"></span>
          <span>{title}</span>
        </h2>
        <div className="gnb">
          <nav>
            <ul>
              <li onClick={() => navigate('/')}><span>Home</span></li>
              <li onClick={() => navigate('/file')}><span>File</span></li>
              <li onClick={() => navigate('/view')}><span>View</span></li>
              <li onClick={() => navigate('/contact')}><span>Contact</span></li>
            </ul>
          </nav>
        </div>
        <div className="btnWrap">
          <button className="btn sm">
            <span className="icon icon-min"></span>
          </button>
          <button className="btn sm">
            <span className="icon icon-max"></span>
          </button>
          <button className="btn sm">
            <span className="icon icon-close"></span>
          </button>
        </div>
      </div>
    </header >
  )
}

export default ModalHeader 