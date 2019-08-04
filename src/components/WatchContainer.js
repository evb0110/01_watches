import React from 'react';
import Watch from './Watch';
import './WatchContainer.css';

export default function() {
  return (
    <div class="watch-container">
      <div class="city-and-cross">
        <span class="city">London</span>
        <span class="cross">❌</span>
      </div>
      <Watch />
    </div>
  );
}
