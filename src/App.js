import React from 'react';
import './App.css';
import CounterClass from './CounterClass';
import HookCounter from './CounterHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass />
        <HookCounter />
      </header>
    </div>
  );
}

export default App;
