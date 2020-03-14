import React from "react";

export default function progressCircle({ timeLeft, duration }) {
  const perimeter = 190 * 2 * Math.PI;
  const dashOffset = (perimeter * timeLeft) / duration - perimeter;

  return (
    <svg className="progressCircle">
      <circle
        style={{ strokeDasharray: perimeter, strokeDashoffset: dashOffset }}
        r="190"
        cx="0"
        cy="200"
        fill="transparent"
        stroke="#c53030"
        strokeWidth="15"
        transform="rotate(-90 100 100)"
      ></circle>
    </svg>
  );
}
