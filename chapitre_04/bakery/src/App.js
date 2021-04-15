import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add";
import Button from "./components/Button";
import List from "./components/List";
import Pay from "./components/Pay"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab:"add",
      items:[]


    }
    this.blue=this.blue.bind(this)
  }
  blue(){
    if(this.state.activeTab==="add"){
      return "btn btn-primary"
    }



  }

  render(){
  return(
    <div>
      
      <Button  isSelected={this.blue()} >Add</Button>

      <Button isSelected={this.state.activeTab}>List</Button>

      <Button isSelected={this.state.activeTab}>Pay</Button>
      

      <List/>
      <Add/>
      <Pay/>

    </div>
  )
}


}

export default App;
