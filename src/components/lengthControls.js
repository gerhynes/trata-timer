import React from "react";

export default function LengthControls({
  count,
  title,
  handleIncrement,
  handleDecrement,
}) {
  const id = title.toLowerCase();
  return (
    <div className="length-controls">
      <h3 id={`${id}-label`}>
        Fad an {title === "Session" ? "tSeisiúin" : "tSosa"}
      </h3>
      <div className="controls-inner">
        <button
          className="button"
          onClick={handleIncrement}
          id={`${id}-increment`}
        >
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
        <h3 id={`${id}-length`}>{count}</h3>
        <button
          className="button"
          onClick={handleDecrement}
          id={`${id}-decrement`}
        >
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
