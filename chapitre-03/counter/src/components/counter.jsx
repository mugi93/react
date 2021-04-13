import React from "react";

class Counter extends React.Component {


  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button style={{ backgroundColor: "red" }} onClick={this.props.addFunction} >+</button>
        <button style={{ backgroundColor: "green" }} onClick={this.props.removeFunction}>-</button>

      </div>
    )
  };
}

export default Counter;