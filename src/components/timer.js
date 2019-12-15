import React, { Component } from "react"
import "./timer.css"

export default class timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 25,
    }
  }
  startTimer() {}
  pauseTimer() {}
  resetTimer() {}
  incrementSession() {}
  decrementsession() {}
  incrementBreak() {}
  decrementBreak() {}
  render() {
    return (
      <div className="Timer">
        <div className="controls">
          <div className="break-controls">
            <h3 id="break-label">Break Length</h3>
            <button>
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
            <button>
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
          <div className="session-controls">
            <h3 id="session-label">Session Length</h3>
            <button>
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
            <button>
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
        <div className="display">
          <h2 className="timer-label" id="timer-label">
            Session
          </h2>
          <h3 className="time-left" id="time-left">
            {this.state.timeLeft}
          </h3>
        </div>
      </div>
    )
  }
}
