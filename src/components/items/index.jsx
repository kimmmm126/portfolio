import React from 'react';
import Slider from 'react-slick';
import ModalHeader from '../modal/header';

const Items = ({ itemList, closeClick }) => {
  const setting = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="items">
      {itemList ? (
        <Slider {...setting}>
          {itemList.map(({ idx, img, name, desc }) => {
            return (
              <div key={idx} className="item">
                <ModalHeader closeClick={closeClick}>
                  <div className="img">{img}</div>
                  <div className="txt">
                    <p className="tit">{name}</p>
                    <p className="desc">{desc}</p>
                  </div>
                  <button className="btn btnCheck">Check</button>
                </ModalHeader>
              </div>
            );
          })}
        </Slider>
      ) : null}
    </div>
  );
};

export default Items;
