import React, { Component } from "react";
import LengthControls from "./lengthControls";
import TimerControls from "./timerControls";
import Display from "./display";
import "./timer.css";
import Alarm from "../audio/Alarm.mp3";

export default class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      timerType: "Session",
      timerIsRunning: false,
    };
    this.timer = null;

    // this.startTimer = this.startTimer.bind(this);
    // this.pauseTimer = this.pauseTimer.bind(this);
    // this.resetTimer = this.resetTimer.bind(this);
    // this.incrementSession = this.incrementSession.bind(this);
    // this.decrementSession = this.decrementSession.bind(this);
    // this.incrementBreak = this.incrementBreak.bind(this);
    // this.decrementBreak = this.decrementBreak.bind(this);
    // this.setClock = this.setClock.bind(this);
    // this.setTimer = this.setTimer.bind(this);
    // this.setTimerType = this.setTimerType.bind(this);
    // this.playAlarm = this.playAlarm.bind(this);
  }

  handlePlayPause = () => {
    const { timerIsRunning } = this.state;

    if (timerIsRunning) {
      clearInterval(this.timer);

      this.setState({
        timerIsRunning: false,
      });
    } else {
      this.setState({
        timerIsRunning: true,
      });

      this.timer = setInterval(() => {
        const { timeLeft, timerType, sessionLength, breakLength } = this.state;

        if (timeLeft === 0) {
          this.setState({
            timerType: timerType === "Session" ? "Break" : "Session",
            timeLeft:
              timerType === "Session" ? breakLength * 60 : sessionLength * 60,
          });

          this.audioBeep.play();
        } else {
          this.setState({
            timeLeft: timeLeft - 1,
          });
        }
      }, 1000);
    }
  };

  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
      timerType: "Session",
      timerIsRunning: false,
    });

    clearInterval(this.timer);

    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

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

    if (newTimer > 0 && newTimer < 61 && !timerIsRunning) {
      this.setState({
        [`${currentTimerType}Length`]: newTimer,
      });

      if (timerType.toLowerCase() === currentTimerType) {
        this.setState({
          timeLeft: newTimer * 60,
        });
      }
    }
  };

  render() {
    const {
      breakLength,
      sessionLength,
      timeLeft,
      timerType,
      timerIsRunning,
    } = this.state;

    const breakProps = {
      title: "Break",
      count: breakLength,
      handleDecrement: () => this.handleLengthChange(-1, "break"),
      handleIncrement: () => this.handleLengthChange(1, "break"),
    };

    const sessionProps = {
      title: "Session",
      count: sessionLength,
      handleDecrement: () => this.handleLengthChange(-1, "break"),
      handleIncrement: () => this.handleLengthChange(1, "break"),
    };

    return (
      <div className="Timer">
        <div className="controls">
          <LengthControls />
          <LengthControls />
        </div>
        <div className="clock-container">{/* Clock Goes Here */}</div>
      </div>
    );
  }

  // =====================
  // Version 1.0
  // =====================

  startTimer() {
    // Clear any existing interval in case user presses start more than once
    clearInterval(this.timer);

    this.setState({
      timerIsRunning: true,
    });

    this.timer = setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1,
      });
      this.setTimerType();
      if (this.state.timeLeft === 0) {
        this.playAlarm();
      }
    }, 1000);
  }
  pauseTimer() {
    clearInterval(this.timer);
    this.setState({
      timerIsRunning: false,
    });
  }
  resetTimer() {
    clearInterval(this.timer);
    this.state.timerType === "Session"
      ? this.setState(prevState => ({
          timeLeft: prevState.sessionLength * 60,
          timerIsRunning: false,
          sessionLength: 25,
          breakLength: 5,
          timerType: "Session",
        }))
      : this.setState(prevState => ({
          timeLeft: prevState.breakLength * 60,
          timerIsRunning: false,
          sessionLength: 25,
          breakLength: 5,
          timerType: "Session",
        }));
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
  incrementSession() {
    if (this.state.sessionLength < 60) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength + 1,
      }));
    }
    this.setTimer();
  }
  decrementSession() {
    if (this.state.sessionLength > 1) {
      this.setState(prevState => ({
        sessionLength: prevState.sessionLength - 1,
      }));
    }
    this.setTimer();
  }
  incrementBreak() {
    if (this.state.breakLength < 60) {
      this.setState(prevState => ({
        breakLength: prevState.breakLength + 1,
      }));
    }
    this.setTimer();
  }
  decrementBreak() {
    if (this.state.breakLength > 1) {
      this.setState(prevState => ({
        breakLength: prevState.breakLength - 1,
      }));
    }
    this.setTimer();
  }
  setTimer() {
    if (this.state.timerIsRunning === "true") return;
    if (this.state.timerType === "Session") {
      this.setState(prevState => ({ timeLeft: prevState.sessionLength * 60 }));
    }
    if (this.state.timerType === "Break") {
      this.setState(prevState => ({ timeLeft: prevState.breakLength * 60 }));
    }
    this.setClock();
  }
  setTimerType() {
    if (this.state.timeLeft < 0) {
      this.state.timerType === "Session"
        ? this.setState(prevState => ({
            timeLeft: prevState.breakLength * 60,
            timerType: "Break",
          }))
        : this.setState(prevState => ({
            timeLeft: prevState.SessionLength * 60,
            timerType: "Session",
          }));
    }
  }
  setClock() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`;
  }
  playAlarm() {
    this.audioBeep.play();
  }
  render() {
    return (
      <div className="Timer">
        <div className="controls">
          <LengthControls
            label="Break Length"
            labelID="break-label"
            increment={this.incrementBreak}
            incrementID="break-increment"
            length={this.state.breakLength}
            lengthID="break-length"
            decrement={this.decrementBreak}
            decrementID="break-decrement"
          />
          <LengthControls
            label="Session Length"
            labelID="session-label"
            increment={this.incrementSession}
            incrementID="session-increment"
            length={this.state.sessionLength}
            lengthID="session-length"
            decrement={this.decrementSession}
            decrementID="session-decrement"
          />
        </div>
        <Display timerType={this.state.timerType} setClock={this.setClock} />
        <TimerControls
          timerIsRunning={this.state.timerIsRunning}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
          resetTimer={this.resetTimer}
        />
        <audio
          src={Alarm}
          id="beep"
          ref={audio => {
            this.audioBeep = audio;
          }}
        ></audio>
      </div>
    );
  }
}
