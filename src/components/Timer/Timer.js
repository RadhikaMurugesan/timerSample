import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerA: 0,
      timerB: 0,
      checked: true,
      maxTimeCount: 50
    };
    this.timerASeconds = 1000;
    this.timerBSeconds = 2000;
  }
  componentDidMount() {
    this.initTimerA();
    this.initTimerB();
  }

  initTimerA = () => {
    clearInterval(this.timerA);
    this.timerA = setInterval(
      () => {
        if (this.state.timerA < this.state.maxTimeCount) {
          this.setState({
            timerA: this.state.timerA + 1
          });
        } else {
          clearInterval(this.timerA);
        }
      },

      this.timerASeconds
    );
  };

  initTimerB = () => {
    clearInterval(this.timerB);
    this.timerB = setInterval(
      () => {
        if (this.state.timerB < this.state.maxTimeCount) {
          this.setState({
            timerB: this.state.timerB + 1
          });
        } else {
          clearInterval(this.timerB);
        }
      },

      this.timerBSeconds
    );
  };

  check = event => {
    console.log(event.target.checked);

    this.setState({
      checked: !this.state.checked
    });
    if (event.target.checked) {
      this.timerASeconds = 1000;
      this.timerBSeconds = 2000;
    } else {
      console.log("else clibk");

      this.timerASeconds = 2000;
      this.timerBSeconds = 1000;
    }
    this.initTimerA();
    this.initTimerB();
  };

  startTimer = event => {
    this.initTimerA();
    this.initTimerB();
  };

  resetTimer = event => {
    event.preventDefault();
    clearInterval(this.timerA);
    clearInterval(this.timerB);
    this.setState({
      timerA: 0,
      timerB: 0
    });
  };

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <div>
          <input type="text" value={this.state.timerA} />
          <input type="text" value={this.state.timerB} />
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.check}
          />
        </div>
        <br />
        <input type="text" value={this.state.maxTimeCount} />
        <br />
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.resetTimer}>Reset</button>
          {this.state.timerA === this.state.maxTimeCount &&
          this.state.timerB === this.state.maxTimeCount ? (
            <p>Maximum Count Reached</p>
          ) : null}
        </div>
      </div>
    );
  }
}
