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
        aria-label="Start/Stop Button"
      >
        <div className="icon">
          {timerIsRunning ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-pause"
              fill="none"
              viewBox="0 0 24 24"
              stroke="var(--red-600)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-play"
              fill="none"
              viewBox="0 0 24 24"
              stroke="var(--red-600)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </button>
      <button
        className="button"
        id="reset"
        onClick={handleReset}
        aria-label="Reset Button"
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-reset"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--red-600)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
