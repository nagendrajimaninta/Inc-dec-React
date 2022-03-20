import React from "react";
import "./styles.css";
function Advm() {
  return (
    <>
      <h3>Something hear we need to insert The text hear</h3>
    </>
  );
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <button onClick={this.inc}>+</button>
        <span>Count is :{this.state.count}</span>
        <button onClick={this.dec}>-</button>
      </>
    );
  }
}
export default function App() {
  return (
    <div className="App">
      <Counter />
      <Advm />
    </div>
  );
}
