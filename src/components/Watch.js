import React from 'react';
import './Watch.css'

export default class Watch extends React.Component {
  componentDidMount() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hoursText = document.querySelector('#hours');
    const minutesText = document.querySelector('#minutes');

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = (seconds / 60) * 360 + 90;
      const minutesDegrees = (minutes / 60) * 360 + 90;
      const hoursDegrees = (hours / 12) * 360 + 90;

      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

      console.log(hours + ':' + minutes + ':' + seconds);
      hoursText.innerHTML = '' + (hours % 12 < 10 ? '0' : ' ') + (hours % 12);
      minutesText.innerHTML = '' + (minutes < 10 ? '0' : '') + minutes;
    }

    setInterval(setDate, 1000);
  }

  render() {
    return (
      <div>
        <div class="clock">
          <div class="clock-face">
            <div class="hand-container hour-face">
              <div class="hand hour-hand" />
            </div>
            <div class="hand-container min-face">
              <div class="hand min-hand" />
            </div>
            <div class="hand-container second-face">
              <div class="hand second-hand" />
            </div>
            <div class="center-peg" />
          </div>
        </div>
        <div class="digital">
          <h1>
            <span id="hours">12</span>:<span id="minutes">00</span>
          </h1>
        </div>
      </div>
    );
  }
}
