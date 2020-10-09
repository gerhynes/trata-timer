import React, { useState, useEffect, useRef } from "react";
import LengthControls from "./LengthControls";
import TimerControls from "./TimerControls";
import Display from "./Display";
import ProgressCircle from "./ProgressCircle";
import "./Timer.css";
import Alarm from "../audio/Alarm.mp3";

export default function Timer() {
  let timer = null;
  const alarm = useRef();
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [duration, setDuration] = useState(1500);
  const [timerType, setTimerType] = useState("Session");
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  const handlePlayPause = () => {
    // Pause timer if running
    if (timerIsRunning) {
      clearInterval(timer);
      setTimerIsRunning(false);
    }
    // Otherwise start timer
    else {
      setTimerIsRunning(true);

      timer = setInterval(() => {
        // Change between session and break on 0
        if (timeLeft === 0) {
          setTimerType(timerType === "Session" ? "Break" : "Session");
          setTimeLeft(
            timerType === "Session" ? breakLength * 60 : sessionLength * 60
          );
          setDuration(
            timerType === "Session" ? breakLength * 60 : sessionLength * 60
          );
          alarm.current.play();
        }
        // Decrement timer while running
        else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    clearInterval(timer);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(1500);
    setDuration(1500);
    setTimerType("Session");
    setTimerIsRunning(false);
    alarm.current.pause();
    alarm.current.currentTime = 0;
  };

  // Convert timeLeft from seconds to minutes and seconds
  const convertToClockTime = count => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  const handleLengthChange = (count, currentTimerType) => {
    let newTimer;

    if (currentTimerType === "Session") {
      newTimer = sessionLength + count;
    } else {
      newTimer = breakLength + count;
    }

    // Make sure sessions and breaks are between 1 and 60 minutes
    if (newTimer > 0 && newTimer < 61 && !timerIsRunning) {
      // this.setState({
      //   [`${currentTimerType}Length`]: newTimer,
      // });

      if (currentTimerType === "Session") {
        setSessionLength(newTimer);
      } else if (currentTimerType === "Break") {
        setBreakLength(newTimer);
      }

      if (timerType.toLowerCase() === currentTimerType) {
        setTimeLeft(newTimer * 60);
        setDuration(newTimer * 60);
      }
    }
  };

  return (
    <div className="Timer">
      <div className="controls">
        <LengthControls
          title={"Break"}
          count={breakLength}
          handleDecrement={() => handleLengthChange(-1, "break")}
          handleIncrement={() => handleLengthChange(1, "break")}
        />
        <LengthControls
          title={"Session"}
          count={sessionLength}
          handleDecrement={() => handleLengthChange(-1, "session")}
          handleIncrement={() => handleLengthChange(1, "session")}
        />
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
            handlePlayPause={handlePlayPause}
            handleReset={handleReset}
          />
        </div>
        <ProgressCircle timeLeft={timeLeft} duration={duration} />
      </div>
      <audio src={Alarm} id="beep" ref={alarm}></audio>
    </div>
  );
}
