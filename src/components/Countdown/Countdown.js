import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import CountdownTimer from './CountdownTimer';
import InfoMessage from './InfoMessage';
import './Countdown.scss';

const Countdown = () => {
  const initialCountdownSettings = {
    eventNameValue: '',
    dateValue: '',
    timeValue: '',
    ampmValue: 'am',
    unixEndDate: Date.UTC(2022, 8, 22, 10, 0, 0)
  };
  const initialCountdownTimer = {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  };

  const [countdownSettings, setCountdownSettings] = useState(JSON.parse(localStorage.getItem('countdownDate')) || { ...initialCountdownSettings });
  const [countdownTimer, setCountdownTimer] = useState({ ...initialCountdownTimer });

  const playTimer = (currentUnixEndDate) => {
    const now = new Date();

    console.log("Now ", now);
    console.log("Limit ", currentUnixEndDate);

    const distance = currentUnixEndDate - now / 1000;

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
      setCountdownSettings({ ...initialCountdownSettings, unixEndDate: null });
      setCountdownTimer({ ...initialCountdownTimer });
    }
  };

  useEffect(() => {
    let timer = null;
    
    if (countdownSettings.unixEndDate) {
      timer = setInterval(() => { 
        playTimer(countdownSettings.unixEndDate);}
        , 1000);
    }
    localStorage.setItem('countdownDate', JSON.stringify(countdownSettings));

    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, []);

  return countdownSettings.unixEndDate ? (
      <div className="countdown">
        <CountdownTimer countdownTimer={countdownTimer} unixEndDate={countdownSettings.unixEndDate} />
      </div>
    ) :
    (
      <>
      </>
    )
  ;
}

export default Countdown;