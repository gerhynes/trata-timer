import React, { Component } from "react";
import LengthControls from "./lengthControls";
import TimerControls from "./timerControls";
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
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.setClock = this.setClock.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.setTimerType = this.setTimerType.bind(this);
    this.playAlarm = this.playAlarm.bind(this);
  }

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
        <LengthControls
          incrementBreak={this.incrementBreak}
          breakLength={this.state.breakLength}
          decrementBreak={this.decrementBreak}
          incrementSession={this.incrementSession}
          sessionLength={this.state.sessionLength}
          decrementSession={this.decrementSession}
        />
        <div className="display">
          <h2 className="timer-label" id="timer-label">
            {this.state.timerType}
          </h2>
          <h3 className="time-left" id="time-left">
            {this.setClock()}
          </h3>
        </div>
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
