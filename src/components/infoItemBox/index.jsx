import React from "react";
import Slider from "react-slick";

const InfoItemBox = ({ itemList }) => {

  const setting = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToShow: 3,
    arrows: false
  };

  return (
    <div className="infoItem">
      {itemList ?
        <Slider  {...setting}>
          {
            itemList.map((item) => {
              return (
                <div key={item.id} className="itemBox">
                  <div className="item" />
                  <div className="txt">
                    <em className="tit">{item.name}</em>
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