import React, { Component } from "react";
import "./timer.css";

export default class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.setClock = this.setClock.bind(this);
  }
  startTimer() {}
  pauseTimer() {}
  resetTimer() {}
  incrementSession() {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
      });
    }
  }
  decrementSession() {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
      });
    }
  }
  incrementBreak() {
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1,
      });
    }
  }
  decrementBreak() {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1,
      });
    }
  }
  setClock() {
    let minutes = Math.floor(this.state.timeLeft / 60);
    let seconds = this.state.timeLeft - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`;
  }
  render() {
    return (
      <div className="Timer">
        <div className="controls">
          <div className="break-controls">
            <h3 id="break-label">Break Length</h3>
            <div className="break-controls-inner">
              <button onClick={this.incrementBreak}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon-arrow-thin-up-circle"
                >
                  <circle cx="12" cy="12" r="10" class="primary" />
                  <path
                    class="secondary"
                    d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"
                  />
                </svg>
              </button>
              <span className="break-length" id="break-length">
                {this.state.breakLength}
              </span>
              <button onClick={this.decrementBreak}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon-arrow-thin-down-circle"
                >
                  <circle cx="12" cy="12" r="10" class="primary" />
                  <path
                    class="secondary"
                    d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="session-controls">
            <h3 id="session-label">Session Length</h3>
            <div className="session-controls-inner">
              <button onClick={this.incrementSession}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon-arrow-thin-up-circle"
                >
                  <circle cx="12" cy="12" r="10" class="primary" />
                  <path
                    class="secondary"
                    d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"
                  />
                </svg>
              </button>
              <span className="session-length" id="session-length">
                {this.state.sessionLength}
              </span>
              <button onClick={this.decrementSession}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="icon-arrow-thin-down-circle"
                >
                  <circle cx="12" cy="12" r="10" class="primary" />
                  <path
                    class="secondary"
                    d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="display">
          <h2 className="timer-label" id="timer-label">
            Session
          </h2>
          <h3 className="time-left" id="time-left">
            {this.setClock()}
          </h3>
        </div>
        <div className="timer-controls">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-play"
            >
              <circle cx="12" cy="12" r="10" class="primary" />
              <path
                class="secondary"
                d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-pause"
            >
              <circle cx="12" cy="12" r="10" class="primary" />
              <path
                class="secondary"
                d="M9 8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm5 0h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-history"
            >
              <path
                class="primary"
                d="M6.55 6.14l1.16 1.15A1 1 0 0 1 7 9H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1.7-.7l1.44 1.42A10 10 0 1 1 2 12a1 1 0 0 1 2 0 8 8 0 1 0 2.55-5.86z"
              />
              <path
                class="secondary"
                d="M15.7 14.3a1 1 0 0 1-1.4 1.4l-3-3a1 1 0 0 1-.3-.7V7a1 1 0 0 1 2 0v4.59l2.7 2.7z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
