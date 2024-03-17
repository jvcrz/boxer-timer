import React, { useState, useEffect } from 'react';
import tiro from './tiro.mp3';
import './TimerComponent.css'

const TimerComponent = () => {
  const [countDown, setCountDown] = useState(60); // Tempo total em segundos
  const [intervalTime, setIntervalTime] = useState(3); // Intervalo em segundos
  const [isRunning, setIsRunning] = useState(false);
  const audioClip = new Audio(tiro); // Corrigido para usar goSound

  useEffect(() => {
    let interval = null;

    if (isRunning && countDown > 0) {
      interval = setInterval(() => {
        setCountDown(prevCountDown => prevCountDown - 1);
        if ((countDown - 1) % intervalTime === 0) {
          audioClip.play();
        }
      }, 1000);
    } else if (countDown === 0) {
      setIsRunning(false);
    //   alert('Lesgooooo');
    }

    return () => clearInterval(interval);
  }, [isRunning, countDown, intervalTime, audioClip]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleChange = (event) => {
    if (!isRunning) {
      setCountDown(parseInt(event.target.value, 10));
    }
  };

  return (
    <div className='timer-body'>
        
    <h3 className='headline-input'>Set Timer</h3>
    
    <div className='timer-content'>
    <button className='btn-secondary1' onClick={() => setCountDown(prev => Math.max(0, prev -30))}>-30</button>

      <input
        className='timer-input'
        type="number"
        value={countDown}
        // onChange={handleChange}
        disabled={isRunning}
      />

        <button className='btn-secondary2' onClick={() => setCountDown(countDown + 30)}>+30</button>
    </div>
      
      <button className='btn-main1' onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Run'}
      </button>

    <button className='btn-main2' onClick={() => setCountDown(0)}>Restart</button>

    <h3 className='headline-input2'>Set Interval</h3>
    <div className='timer-content'>
        <button className='btn-secondary1' onClick={() => setIntervalTime(prev => Math.max(3, prev - 3))}> -3 </button>

        <input
        className='timer-input'
        type='number'
        value={intervalTime}
        onChange={(e) => {
            const newInterval = parseInt(e.target.value, 10)
            setIntervalTime(isNaN(newInterval) ? 0 : newInterval)
        }}
        disabled={isRunning} />

        <button className='btn-secondary2' onClick={() => setIntervalTime(prev => prev + 3)}> +3 </button>
    </div>




    </div>
  );
};


export default TimerComponent;
