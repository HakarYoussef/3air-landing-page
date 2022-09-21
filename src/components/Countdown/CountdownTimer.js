import React, { useState, useEffect } from 'react';
import './CountdownTimer.scss';

const CountdownTimer = ({ countdownTimer }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className="countdowntimer">
      {width > 767 ? (
        <>
          <span className="countdowntimer-header">LISTING COUNTDOWN</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <div className="countdowntimer-body">
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.days}</div>
              <div className="countdown-unit">Day</div>
            </div>
            :
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.hours}</div>
              <div className="countdown-unit">Hour</div>
            </div>
            :
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.mins}</div>
              <div className="countdown-unit">Min</div>
            </div>
            :
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.secs}</div>
              <div className="countdown-unit">Sec</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="countdowntimer-header">COUNTDOWN</div>
          <div className="countdowntimer-body">
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.days}</div>
              <div className="countdown-unit">Day</div>
            </div>
            :
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.hours}</div>
              <div className="countdown-unit">Hour</div>
            </div>
            :
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.mins}</div>
              <div className="countdown-unit">Min</div>
            </div>
            :
            <div className="countdown-card card">
              <div className="countdown-value">{countdownTimer.secs}</div>
              <div className="countdown-unit">Sec</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
