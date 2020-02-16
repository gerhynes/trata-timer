import React from "react";

export default function LengthControls(props) {
  const {
    incrementBreak,
    breakLength,
    decrementBreak,
    incrementSession,
    sessionLength,
    decrementSession,
  } = props;
  return (
    <div className="controls">
      <div className="break-controls">
        <h3 id="break-label">Break Length</h3>
        <div className="break-controls-inner">
          <button onClick={incrementBreak} id="break-increment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-arrow-thin-up-circle"
            >
              <circle cx="12" cy="12" r="10" className="primary" />
              <path
                className="secondary"
                d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"
              />
            </svg>
          </button>
          <span className="break-length" id="break-length">
            {breakLength}
          </span>
          <button onClick={decrementBreak} id="break-decrement">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-arrow-thin-down-circle"
            >
              <circle cx="12" cy="12" r="10" className="primary" />
              <path
                className="secondary"
                d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="session-controls">
        <h3 id="session-label">Session Length</h3>
        <div className="session-controls-inner">
          <button onClick={incrementSession} id="session-increment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-arrow-thin-up-circle"
            >
              <circle cx="12" cy="12" r="10" className="primary" />
              <path
                className="secondary"
                d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"
              />
            </svg>
          </button>
          <span className="session-length" id="session-length">
            {sessionLength}
          </span>
          <button onClick={decrementSession} id="session-decrement">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon-arrow-thin-down-circle"
            >
              <circle cx="12" cy="12" r="10" className="primary" />
              <path
                className="secondary"
                d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
