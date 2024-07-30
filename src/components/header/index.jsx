import React from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"

const Header = () => {
  const navigate = useNavigate();
  return (
    <header id="header" className="header">
      <div className="headerContanier">
        <div className="title">
          <img className="logo" src={Logo} alt="인스타그램" />
          <h2>portfolio.exe</h2>
        </div>
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
          <button className="btn sm min">
          </button>
          <button className="btn sm max">
          </button>
          <button className="btn sm close">
          </button>
        </div>
      </div>
    </header >
  )
}

export default Header 