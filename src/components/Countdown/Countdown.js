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
    unixEndDate: new Date(2022, 8, 22, 10, 0, 0)//[2022, 8, 22, 10, 0, 0, 0]
  };
  const initialCountdownTimer = {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  };

  const [countdownSettings, setCountdownSettings] = useState(JSON.parse(localStorage.getItem('countdownDate')) || { ...initialCountdownSettings });
  const [countdownTimer, setCountdownTimer] = useState({ ...initialCountdownTimer });
  const [countdownInfoMessage, setCountdownInfoMessage] = useState('');

  const playTimer = useCallback((currentUnixEndDate) => {
    const now = new Date;
    // const distance = (currentUnixEndDate - Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
    //                                                 now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())) / 1000;
    const distance = (currentUnixEndDate - now) / 1000;

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
      setCountdownInfoMessage('');
    }
    else {
      setCountdownInfoMessage('Project launched!');
      setCountdownSettings({ ...initialCountdownSettings });
      setCountdownTimer({ ...initialCountdownTimer });
    }
  }, []);

  useEffect(() => {
    let timer = null;

    if (countdownSettings.unixEndDate) {
      timer = setInterval(() => playTimer(countdownSettings.unixEndDate), 1000);
    }
    localStorage.setItem('countdownDate', JSON.stringify(countdownSettings));

    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, []);

  return (
    <div className="countdown">
      {countdownSettings.unixEndDate ? <CountdownTimer countdownTimer={countdownTimer} unixEndDate={countdownSettings.unixEndDate} /> : <InfoMessage countdownInfoMessage={countdownInfoMessage} />}
    </div>
  );
}

export default Countdown;