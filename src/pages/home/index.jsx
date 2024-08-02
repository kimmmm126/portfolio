import React, { useState } from 'react';
import Modal from '../../components/modal';
import profileImg from '../../assets/images/profile.gif';
import { InstagramIcon } from '../../constants/svg.js';

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const onOpenPopup = () => {
    setOpenPopup(true);
  };

  const closeClick = () => {
    setOpenPopup(false);
  }

  return (
    <div className='inner'>
      <div className='icons'>
        <span onClick={onOpenPopup} className='icon iconHome'>
          <InstagramIcon width={40} height={40} />
        </span>
      </div>
      {openPopup && (
        <Modal title="Portfolio" logo={InstagramIcon} img={profileImg} closeClick={closeClick} />
      )}
    </div>
  );
};

export default Home;
