import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const [timerA, setTimerA] = useState(0);
  const [timerB, setTimerB] = useState(0);
  const [maxCount, setMaxCount] = useState(50);
  const [isActive, setIsActive] = useState(false);
  const [checked, ischecked] = useState(true);
  const [timerASeconds, setTimerASconds] = useState(1000);
  const [timerBSeconds, setTimerBSconds] = useState(2000);

  function check(event) {
   
    ischecked(!checked)
    if (!checked) {
      setTimerASconds(1000);
      setTimerBSconds(2000);
      
    } else {
      setTimerASconds(2000);	
      setTimerBSconds(1000);
    }

  }

  useEffect(() => {
    let intervalA = null;
    let intervalB = null;
   intervalA = initTimerA(intervalA, timerASeconds);
   intervalB =  initTimerB(intervalB, timerBSeconds);
   return () => {
    clearInterval(intervalA);
    clearInterval(intervalB);
  }
  }, [checked, isActive, timerASeconds, timerBSeconds]);

  function initTimerA(intervalA, timerASeconds) {
       
    if (isActive && timerA < maxCount) {
      return intervalA = setInterval(() => {
        setTimerA(timerA => timerA + 1);
      }, timerASeconds);
    } else {
      clearInterval(intervalA);
    }
  }
  function initTimerB(intervalB, timerBSeconds) {
    if (isActive && timerB < maxCount) {
      return intervalB = setInterval(() => {
        setTimerB(timerB => timerB + 1);
      }, timerBSeconds);
    } else {
      clearInterval(intervalB);
    }
  }

  

  function startTimer() {
    console.log('start')
    setIsActive(!isActive);
    initTimerA(null, timerASeconds);
    initTimerB(null, timerBSeconds);
  }

  function reset() {
    setIsActive(false);
    setTimerA(0);
    setTimerB(0);
  }

  return (
    <div>
      Timer Functional Component
      <div>
        <input type="text" value={timerA} />
        <input type="text" value={timerB} />
        <input type="checkbox" checked={checked} onChange={check} />
      </div>
      <br />
      <input type="text" value={maxCount} />
      <br />
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={reset}>Reset</button>
        {timerA === maxCount && timerB === maxCount ? <p> Timer Finished </p> : null}
      </div>
    </div>
  );
}
