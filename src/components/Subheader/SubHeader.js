import React from 'react';
import './SubHeader.scss';

function SubHeader({ subHeaderText, firstText, secondText }) {
  return (
    <>
      <div className="subHeaderContainer">
        <div className="hrLineLeft" />
        <div className="subHeaderTextStyle">{subHeaderText}</div>

        <div className="hrLineRight" />
      </div>
      <div className="descContainer">
        <p>{firstText}</p>
        <p>{secondText}</p>
      </div>
    </>
  );
}

export default SubHeader;
