import React, { Component } from "react"

export default class timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionLength: 25,
      breakLength: 5,
    }
  }
  startTimer() {}
  pauseTimer() {}
  resetTimer() {}
  incrementSession() {}
  decrementsession() {}
  incrementBreak() {}
  decrementBreak() {}
  render() {
    return (
      <div>
        <h2>Timer goes here</h2>
      </div>
    )
  }
}
