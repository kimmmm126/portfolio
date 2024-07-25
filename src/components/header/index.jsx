import React from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/images/logo.png"

const Header = () => {
  const navigate = useNavigate()
  return (
    <header id="header" className="header">
      <div className="headerContanier">
        <div className="title">
          <div className="logoWrap">
            <img className="logo" src={Logo} alt="인스타그램" />
          </div>
          <h2>Instagram.exe</h2>
        </div>
        <div className="gnb">
          <nav>
            <ul>
              <li onClick={() => navigate('/')}><span>Home</span></li>
              <li onClick={() => navigate('/file')}><span>File</span></li>
              <li><span>View</span></li>
              <li><span>Contact</span></li>
            </ul>
          </nav>
        </div>
        <div className="btnWrap">
          <button className="btn icon windowDown">아래로</button>
          <button className="btn icon windowScale">창크게</button>
          <button className="btn icon windowClose">창닫기</button>
        </div>
      </div>
    </header >
  )
}

export default Header 