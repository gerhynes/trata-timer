import React from "react";

export default function Display({ timerType, formatTime, timeLeft }) {
  return (
    <div className="display">
      <h2 className="timer-label" id="timer-label">
        {timerType === "Session" ? "Seisiún" : "Sos"}
      </h2>
      <h3 className="time-left" id="time-left">
        {formatTime(timeLeft)}
      </h3>
    </div>
  );
}
