import React, { useState, useEffect } from 'react';


export default function Timer (props) {
  const [timerA, setTimerA] = useState(0);
  const [timerB, setTimerB] = useState(0);
  const [maxCount, setMaxCount] = useState(50);

  useEffect(() => {
    initTimerA();
    initTimerB();
  });

function initTimerA() {
    clearInterval(TimerA);
    var TimerA = setInterval(
      () => {
        if (timerA < maxCount) {
            setTimerA(timerA + 1)          
        } else {
          clearInterval(TimerA);
        }
      },

      1000
    );
  };


  function initTimerB() {
    clearInterval(TimerB);
   var TimerB= setInterval(
      () => {
        if (timerB < maxCount) {
            setTimerB(timerB + 1)          
        } else {
          clearInterval(TimerB);
        }
      },

      2000
    );
  };

  function startTimer() {
    initTimerA();
    initTimerB();
  };

    return (
        <div>
            Timer Functional Component
            <div>
          <input type="text" value={timerA} />
          <input type="text" value={timerB} />
          <input
            type="checkbox"
            checked={{}}
            onChange={{}}
          />
        </div>
        <br />
        <input type="text" value={maxCount} />
        <br />
        <div>
          <button onClick={startTimer.bind()}>Start</button>
          <button >Reset</button>
         {/* <p>Timer Finished</p> */}
        </div>
        </div>
    )

}
