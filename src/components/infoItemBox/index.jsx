import React from "react";
import Slider from "react-slick";

const InfoItemBox = ({ itemList }) => {

  const setting = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="infoItem">
      {itemList ?
        <Slider {...setting}>
          {
            itemList.map((item) => {
              return (
                <div key={item.id} className="itemBox">
                  <div className="item" />
                  <div className="txt">
                    <p className="tit">{item.name}</p>
                    <p className="desc">test</p>
                  </div>
                  <button className="btn check">Check</button>
                </div>
              )
            })
          }
        </Slider> : null}
    </div>
  )
}

export default InfoItemBox;