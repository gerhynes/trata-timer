import React from "react";
import { useIntl } from "gatsby-plugin-intl";

export default function LengthControls({
  count,
  title,
  handleIncrement,
  handleDecrement,
}) {
  const id = title.toLowerCase();
  const intl = useIntl();
  return (
    <div className="length-controls">
      <h3 className="length-label" id={`${id}-label`}>
        {title === "Session"
          ? intl.formatMessage({ id: "sessionLength" })
          : intl.formatMessage({ id: "breakLength" })}
      </h3>
      <div className="controls-inner">
        <button
          className="button"
          onClick={handleIncrement}
          id={`${id}-increment`}
          aria-label={`Increment ${title}`}
        >
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#c53030"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
          </div>
        </button>
        <h3 className="length-label" id={`${id}-length`}>
          {count}
        </h3>
        <button
          className="button"
          onClick={handleDecrement}
          id={`${id}-decrement`}
          aria-label={`Decrement ${title}`}
        >
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#c53030"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
