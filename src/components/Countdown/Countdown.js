import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import './Countdown.scss';

const Countdown = () => {
  const unixEndDate = new Date(Date.UTC(2022, 8, 22, 10, 0, 0));
  const initialCountdownTimer = {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  };

  const [countdownSettings, setCountdownSettings] = useState(unixEndDate);
  const [countdownTimer, setCountdownTimer] = useState({ ...initialCountdownTimer });

  const playTimer = () => {
    const now = new Date();

    const distance = (countdownSettings - now) / 1000;

    if (distance > 0) {
      setCountdownTimer(prevCountdownTimer => {
        return {
          ...prevCountdownTimer,
          days: parseInt(distance / (60 * 60 * 24), 10),
          hours: parseInt(distance % (60 * 60 * 24) / (60 * 60), 10),
          mins: parseInt(distance % (60 * 60) / (60), 10),
          secs: parseInt(distance % 60, 10)
        };
      });
    }
    else {
      setCountdownSettings( null );
      setCountdownTimer({ ...initialCountdownTimer });
    }
  };

  useEffect(() => {
    let timer = null;
    
    if (unixEndDate) {
      timer = setInterval(() => { 
        playTimer(unixEndDate);}
        , 1000);
    }

    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, []);

  return countdownSettings ? (
      <div className="countdown">
        <CountdownTimer countdownTimer={countdownTimer} unixEndDate={countdownSettings.unixEndDate} />
      </div>
    ) :
    (
      <div className="countdownHidden">
      </div>
    )
  ;
}

export default Countdown;