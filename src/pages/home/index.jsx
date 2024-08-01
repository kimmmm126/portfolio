import React from "react"
import Modal from '../../components/modal';
import profileImg from '../../assets/images/profile.gif';
import Icons from '../../constants/svg.js';



const Home = () => {
  return (
    <Modal title="Portfolio" img={profileImg} icons={Icons} />
  )
}

export default Home;