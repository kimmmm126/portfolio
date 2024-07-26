import React from "react";

const Contents = ({ contentsList }) => {
  return (
    <div className="contentsBox">
      {contentsList ?
        contentsList.map((item) =>
          <img key={item.idx} src="http://placehold.it/300" alt="" />
        )
        : <div className="noContents"><p className="txt">등록된 게시물이 없습니다.</p></div>}
    </div>
  )
}

export default Contents;