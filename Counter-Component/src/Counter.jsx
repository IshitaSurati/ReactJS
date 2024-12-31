import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment} >
          +
        </button>
        <button onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
