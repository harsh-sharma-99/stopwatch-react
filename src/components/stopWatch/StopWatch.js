import React, { useEffect, useState } from "react";
import "./styles.scss";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  const label = isActive ? "Pause" : "Start";
  return (
    <div className="stopwatch-container">
      <div className="timer-count-wrapper">
        <span>{timer}</span>
      </div>
      <div className="timer-buttons-wrapper">
        <button onClick={() => setIsActive(!isActive)}>{label}</button>
        <button onClick={() => setTimer(0)}> Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
