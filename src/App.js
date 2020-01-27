import React from 'react';
import './App.css';
import CounterHookLifecycle from './CounterHookLifecycle';
import CounterClassLifecycle from './CounterClassLifecycle';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClassLifecycle />
        <CounterHookLifecycle />
      </header>
    </div>
  );
}

export default App;
