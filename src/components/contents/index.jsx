import React from 'react';

const Contents = ({ contentsList }) => {
  return (
    <>
      {contentsList ? (
        <div className="contentsBox">
          {contentsList.map(item => (
            <figure>
              <img key={item.idx} src="http://placehold.it/300" alt={item.name} />
            </figure>
          ))}
        </div>
      ) : (
        <div className="noContents">
          <p className="txt">등록된 게시물이 없습니다.</p>
        </div>
      )}
    </>
  );
};

export default Contents;
