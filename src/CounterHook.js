import React, { useState } from 'react';

export default function HookCounter() {
  const [counter, setCounter] = useState(0);
  //? We will have a state called counter
  //? We will have a function to increment it
  //? useState will set the counter to initValue 0

  return (
    <div>
      <h2>HookCounter</h2>
      <p>Your counter is {counter}</p>
      <button onClick={() => setCounter(prevState => prevState + 1)}>
        Increment (+1)
      </button>
    </div>
  );
}
