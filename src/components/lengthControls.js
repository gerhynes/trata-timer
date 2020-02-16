import React from "react";

export default function LengthControls(props) {
  const {
    label,
    labelID,
    increment,
    incrementID,
    length,
    lengthID,
    decrement,
    decrementID,
  } = props;
  return (
    <div className="length-controls">
      <h3 id={labelID}>{label}</h3>
      <div className="controls-inner">
        <button onClick={increment} id={incrementID}>
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
        <span className="break-length" id={lengthID}>
          {length}
        </span>
        <button onClick={decrement} id={decrementID}>
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
  );
}
