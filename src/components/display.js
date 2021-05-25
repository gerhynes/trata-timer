import React from "react";
import { useIntl } from "gatsby-plugin-intl";

export default function Display({ timerType, formatTime, timeLeft }) {
  const intl = useIntl();
  return (
    <div className="display">
      <h2 className="timer-label" id="timer-label">
        {timerType === "Session"
          ? intl.formatMessage({ id: "session" })
          : intl.formatMessage({ id: "break" })}
      </h2>
      <h3 className="time-left" id="time-left">
        {formatTime(timeLeft)}
      </h3>
    </div>
  );
}
