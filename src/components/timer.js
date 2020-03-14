import React, { Component } from "react";
import LengthControls from "./lengthControls";
import TimerControls from "./timerControls";
import Display from "./display";
import ProgressCircle from "./progressCircle";
import "./timer.css";
import Alarm from "../audio/Alarm.mp3";

export default class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      duration: 1500,
      timerType: "Session",
      timerIsRunning: false,
    };
    this.timer = null;
    this.alarm = React.createRef();
  }

  handlePlayPause = () => {
    const { timerIsRunning } = this.state;

    // Pause timer if running
    if (timerIsRunning) {
      clearInterval(this.timer);

      this.setState({
        timerIsRunning: false,
      });
    }
    // Otherwise start timer
    else {
      this.setState({
        timerIsRunning: true,
      });

      this.timer = setInterval(() => {
        const {
          timeLeft,
          duration,
          timerType,
          sessionLength,
          breakLength,
        } = this.state;

        // Change between session and break on 0
        if (timeLeft === 0) {
          this.setState({
            timerType: timerType === "Session" ? "Break" : "Session",
            timeLeft:
              timerType === "Session" ? breakLength * 60 : sessionLength * 60,
          });
          this.alarm.current.play();
        }
        // Decrement timer while running
        else {
          this.setState({
            timeLeft: timeLeft - 1,
          });
        }
      }, 1000);
    }
  };

  handleReset = () => {
    clearInterval(this.timer);

    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      duration: 1500,
      timerType: "Session",
      timerIsRunning: false,
    });

    this.alarm.current.pause();
    this.alarm.current.currentTime = 0;
  };

  // Convert timeLeft from seconds to minutes and seconds
  convertToClockTime = count => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  handleLengthChange = (count, currentTimerType) => {
    const {
      sessionLength,
      breakLength,
      timerIsRunning,
      timerType,
    } = this.state;

    let newTimer;

    if (currentTimerType === "session") {
      newTimer = sessionLength + count;
    } else {
      newTimer = breakLength + count;
    }

    // Make sure sessions and breaks are between 1 and 60 minutes
    if (newTimer > 0 && newTimer < 61 && !timerIsRunning) {
      this.setState({
        [`${currentTimerType}Length`]: newTimer,
      });

      if (timerType.toLowerCase() === currentTimerType) {
        this.setState({
          timeLeft: newTimer * 60,
          duration: newTimer * 60,
        });
      }
    }
  };

  render() {
    const {
      breakLength,
      sessionLength,
      timeLeft,
      duration,
      timerType,
      timerIsRunning,
    } = this.state;

    return (
      <div className="Timer">
        <div className="controls">
          <LengthControls
            title={"Break"}
            count={breakLength}
            handleDecrement={() => this.handleLengthChange(-1, "break")}
            handleIncrement={() => this.handleLengthChange(1, "break")}
          />
          <LengthControls
            title={"Session"}
            count={sessionLength}
            handleDecrement={() => this.handleLengthChange(-1, "session")}
            handleIncrement={() => this.handleLengthChange(1, "session")}
          />
        </div>
        <div className="display-container">
          <div className="display-inner">
            <Display
              timerType={timerType}
              timeLeft={timeLeft}
              convertToClockTime={this.convertToClockTime}
            />
            <TimerControls
              timerIsRunning={timerIsRunning}
              handlePlayPause={this.handlePlayPause}
              handleReset={this.handleReset}
            />
          </div>
          <ProgressCircle timeLeft={timeLeft} duration={duration} />
        </div>
        <audio src={Alarm} id="beep" ref={this.alarm}></audio>
      </div>
    );
  }
}
