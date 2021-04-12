import React from "react";
import './App.css';

import Counter from './components/counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1
    };
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.incrementCount2=this.incrementCount2.bind(this)
    this.decrementCount2=this.decrementCount2.bind(this)
  }
  incrementCount() {
    if (this.state.count < this.state.count2 && this.state.count<100) {
      this.setState({
        count: this.state.count + 1
      });
    } else if (this.state.count = this.state.count2) {
      this.setState({
        count: this.state.count + 1
      });
      this.setState({
        count2: this.state.count2 + 1
      });
    }

  }
  decrementCount() {
    if (this.state.count > 0 && this.state.count<this.state.count2) {
      this.setState({
        count: this.state.count - 1
      });


    } else if (this.state.count = this.state.count2) {
      this.setState({
        count: this.state.count - 1
      });
      this.setState({
        count2: this.state.count2 - 1
      });

    }
  }
  incrementCount2() {
    if (this.state.count2<100) {
      this.setState({
      count2: this.state.count2 + 1
    })
    }
    
  }
  decrementCount2() {
    if (this.state.count2 > 0 && this.state.count2>this.state.count) {
      this.setState({
        count2: this.state.count2 - 1
      });
    }

  }

  

  
  // counter2(){
  //   if(this.state.count<this.state.count2){
  //     incrementCount()
  //   }else if () {

  // }

  // }
  render() {
    console.log(this.state.count);
    return (
      <div>
        <h1>Counter</h1>
        <Counter count={this.state.count} addFunction={this.incrementCount} removeFunction={this.decrementCount} />
        <Counter count={this.state.count2} addFunction={this.incrementCount2} removeFunction={this.decrementCount2} />
      </div>




    );
  }

}

export default App;
