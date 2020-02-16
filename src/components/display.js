import React from "react";

export default function Display(props) {
  const { timerType, setClock } = props;
  return (
    <div className="display">
      <h2 className="timer-label" id="timer-label">
        {timerType}
      </h2>
      <h3 className="time-left" id="time-left">
        {setClock()}
      </h3>
    </div>
  );
}
