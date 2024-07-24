import React from "react";

const Contents = () => {
  return (
    <div className="contentsBox">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) =>
        <img key={item} src="http://placehold.it/300" alt="" />
      )}
    </div>
  )
}

export default Contents;