import React from 'react';
import './App.css';
import CounterClass from './CounterClass';
import CounterHook from './CounterHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass />
        <CounterHook />
      </header>
    </div>
  );
}

export default App;
