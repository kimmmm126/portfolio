import React from 'react';
import Modal from '../../components/modal';
import profileImg from '../../assets/images/profile.gif';
import { InstagramIcon } from '../../constants/svg.js';

const Home = () => {
  return <Modal title="Portfolio" logo={InstagramIcon} img={profileImg} />;
};

export default Home;
