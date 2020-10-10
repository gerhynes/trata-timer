import React from "react";

export default function TimerControls({
  timerIsRunning,
  handleStart,
  handlePause,
  handleReset,
}) {
  return (
    <div className="timer-controls">
      <button
        className="button"
        id="start_stop"
        onClick={timerIsRunning ? handlePause : handleStart}
      >
        {timerIsRunning ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon-pause"
          >
            <circle cx="12" cy="12" r="10" className="primary" />
            <path
              className="secondary"
              d="M9 8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm5 0h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon-play"
          >
            <circle cx="12" cy="12" r="10" className="primary" />
            <path
              className="secondary"
              d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"
            />
          </svg>
        )}
      </button>
      <button className="button" id="reset" onClick={handleReset}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon-history"
        >
          <path
            className="primary"
            d="M6.55 6.14l1.16 1.15A1 1 0 0 1 7 9H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1.7-.7l1.44 1.42A10 10 0 1 1 2 12a1 1 0 0 1 2 0 8 8 0 1 0 2.55-5.86z"
          />
          <path
            className="secondary"
            d="M15.7 14.3a1 1 0 0 1-1.4 1.4l-3-3a1 1 0 0 1-.3-.7V7a1 1 0 0 1 2 0v4.59l2.7 2.7z"
          />
        </svg>
      </button>
    </div>
  );
}
