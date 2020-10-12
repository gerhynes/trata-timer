import React, { useState, useEffect, useRef } from "react";
import LengthControls from "./lengthControls";
import TimerControls from "./timerControls";
import Display from "./display";
import ProgressCircle from "./progressCircle";
import "./timer.css";
import Alarm from "../audio/Alarm.mp3";

export default function Timer() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [timerType, setTimerType] = useState("Session");
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);
  const alarm = useRef();

  const incrementSession = () => {
    if (!timerIsRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const decrementSession = () => {
    if (!timerIsRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };

  const incrementBreak = () => {
    if (!timerIsRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreak = () => {
    if (!timerIsRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  useEffect(() => {
    const changeTimerType = () => {
      if (timerType === "Session") {
        setTimerType("Break");
        setTimeLeft(breakLength * 60);
      } else if (timerType === "Break") {
        setTimerType("Session");
        setTimeLeft(sessionLength * 60);
      }
    };

    let timer = null;
    if (timerIsRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timerIsRunning && timeLeft === 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      if (timerType === "Session") {
        setCompletedSessions(completedSessions + 1);
      }
      alarm.current.play();
      changeTimerType();
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [
    timerIsRunning,
    timeLeft,
    timerType,
    breakLength,
    sessionLength,
    alarm,
    completedSessions,
  ]);

  const handleStart = () => {
    setTimerIsRunning(true);
  };

  const handlePause = () => {
    setTimerIsRunning(false);
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeft(1500);
    setTimerType("Session");
    setTimerIsRunning(false);
    alarm.current.pause();
    alarm.current.currentTime = 0;
  };

  const startSession = () => {
    setTimerType("Session");
    setTimeLeft(sessionLength * 60);
    setTimerIsRunning(true);
  };

  const startShortBreak = () => {
    setTimerType("Break");
    setTimeLeft(breakLength * 60);
    setTimerIsRunning(true);
  };

  const startLongBreak = () => {
    setTimerType("Break");
    setBreakLength(15);
    setTimeLeft(15 * 60);
    setTimerIsRunning(true);
  };

  // Convert timeLeft from seconds to minutes and seconds
  const convertToClockTime = count => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="container">
      <div className="Timer">
        <div className="shortcuts">
          <button className="shortcut-btn" onClick={startSession}>
            Seisiún
          </button>
          <button className="shortcut-btn" onClick={startShortBreak}>
            Sos Beag
          </button>
          <button className="shortcut-btn" onClick={startLongBreak}>
            Sos Mór
          </button>
        </div>
        <div className="display-container">
          <div className="display-inner">
            <Display
              timerType={timerType}
              timeLeft={timeLeft}
              convertToClockTime={convertToClockTime}
            />
            <TimerControls
              timerIsRunning={timerIsRunning}
              handleStart={handleStart}
              handlePause={handlePause}
              handleReset={handleReset}
            />
          </div>
          <ProgressCircle
            timeLeft={timeLeft}
            timerDuration={
              timerType === "Session" ? sessionLength * 60 : breakLength * 60
            }
          />
        </div>
        <div className="controls">
          <LengthControls
            title={"Break"}
            count={breakLength}
            handleDecrement={decrementBreak}
            handleIncrement={incrementBreak}
          />
          <LengthControls
            title={"Session"}
            count={sessionLength}
            handleDecrement={decrementSession}
            handleIncrement={incrementSession}
          />
        </div>
        <audio src={Alarm} id="beep" ref={alarm}></audio>
      </div>
      <div className="completedSessions">
        <h3>Críochnaithe: {completedSessions}</h3>
      </div>
    </div>
  );
}
