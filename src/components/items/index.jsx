import React from 'react';
import Slider from 'react-slick';
import ModalHeader from '../modal/header';

const Items = ({ itemList, closeClick }) => {
  const setting = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
  };

  return (
    <div className="items">
      {itemList && (
        <Slider {...setting}>
          {itemList.map(({ idx, img, name, desc }) => {
            return (
              <div key={idx} className="item">
                <ModalHeader key={idx} closeClick={closeClick} />
                <div className="thumb">
                  {img ? (
                    <img src={img} alt={name} />
                  ) : (
                    <img src="http://placehold.it/300" className="noImg" alt={name} />
                  )}
                </div>
                <div className="txt">
                  <p className="tit">{name}</p>
                  <p className="desc">{desc}</p>
                </div>
                <button className="btn btnCheck">Check</button>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default Items;
