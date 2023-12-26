import React, { useState, useEffect } from "react";
import "./Timer.css";
const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div className="timer">Time: {time} seconds</div>;
};

export default Timer;
