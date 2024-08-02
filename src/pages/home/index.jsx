import React, { useState } from 'react';
import Modal from '../../components/modal';
import profileImg from '../../assets/images/profile.gif';
import { InstagramIcon } from '../../constants/svg.js';

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const onOpenPopup = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <button onClick={onOpenPopup}>Open Modal</button>
      {openPopup && (
        <Modal title="Portfolio" logo={InstagramIcon} img={profileImg} />
      )}
    </>
  );
};

export default Home;
