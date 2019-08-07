import React from 'react';
import './Watch.css';

export default class Watch extends React.Component {
  state = {
    secondsDegrees: null,
    minutesDegrees: null,
    hoursDegrees: null,
    hoursText: null,
    minutesText: null,
    interval: null,
  };

  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
  }

  setDate() {
    let now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() - this.props.moscowOffset + this.props.offset;

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    const hoursText = '' + (hours % 12 < 10 ? '0' : ' ') + (hours % 12);
    const minutesText = '' + (minutes < 10 ? '0' : '') + minutes;

    this.setState({
      hoursText,
      minutesText,
      secondsDegrees,
      minutesDegrees,
      hoursDegrees,
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.setDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock-container">
        <div className="city-and-cross">
          <span className="city">{this.props.city}</span>
          <span
            className="cross"
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            ❌
          </span>
        </div>
        <div className="clock">
          <div className="clock-face">
            <div className="hand-container hour-face">
              <div
                className="hand hour-hand"
                style={{ transform: `rotate(${this.state.hoursDegrees}deg)` }}
              />
            </div>
            <div className="hand-container min-face">
              <div
                className="hand min-hand"
                style={{ transform: `rotate(${this.state.minutesDegrees}deg)` }}
              />
            </div>
            <div className="hand-container second-face">
              <div
                className="hand second-hand"
                style={{ transform: `rotate(${this.state.secondsDegrees}deg)` }}
              />
            </div>
            <div className="center-peg" />
          </div>
        </div>
        <div className="digital">
          <h1>
            <span id="hours">{this.state.hoursText}</span>:
            <span id="minutes">{this.state.minutesText}</span>
          </h1>
        </div>
      </div>
    );
  }
}
