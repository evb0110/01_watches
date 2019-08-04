import React from 'react';
import './App.css';

import Input from './components/Input';
import WatchContainer from './components/WatchContainer';

function App() {
  return (
    <div className="App">
      <Input />
      <div className="Watches">
        <WatchContainer />
      </div>
    </div>
  );
}

export default App;
