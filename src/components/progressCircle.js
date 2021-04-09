import React from "react";

export default function progressCircle({ timeLeft, timerDuration }) {
  const perimeter = 150 * 2 * Math.PI;
  const dashOffset = (perimeter * timeLeft) / timerDuration - perimeter;

  return (
    <svg className="progressCircle">
      <circle
        style={{ strokeDasharray: perimeter, strokeDashoffset: dashOffset }}
        r="150"
        cx="15"
        cy="175"
        fill="transparent"
        stroke="#c53030"
        strokeWidth="10"
        transform="rotate(-90 100 100)"
      ></circle>
    </svg>
  );
}
