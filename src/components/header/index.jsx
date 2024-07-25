import React from "react"
import { useNavigate } from "react-router-dom"
import { CloseIcon, MaxIcon, MinIcon } from '../../assets/svg'
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
            <MinIcon width={6} height={2} fill="none" />
          </button>
          <button className="btn sm max">
            <MaxIcon width={9} height={9} fill="none" />
          </button>
          <button className="btn sm close">
            <CloseIcon width={8} height={7} fill="#000" />
          </button>
        </div>
      </div>
    </header >
  )
}

export default Header 