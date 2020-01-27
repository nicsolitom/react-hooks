import React, { Component } from 'react';

export default class CounterClassLifecycle extends Component {
  //? 1: First JS see the constructor
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  //? 3: Now we are here because of rendering
  componentDidMount() {
    document.title = `Component initialized`;
  }
  //? 4a: A state change...
  //? 4b: ...as a result we enter into this lifecycle
  componentDidUpdate() {
    document.title = `You clicked ${this.state.counter} times`;
  }
  //? 2: We render
  render() {
    return (
      <div>
        <h2>ClassCounterLifecycle</h2>
        <p>Your counter is: {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState(
              // { counter:this.state.counter +1 }
              prevState => ({ counter: prevState.counter + 1 })
            )
          }
        >
          Increment (+1){' '}
        </button>
      </div>
    );
  }
}
