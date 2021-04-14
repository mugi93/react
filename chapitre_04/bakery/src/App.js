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
    
  }
render(){
  return(
    <div>
      <Button isSelected={this.state.activeTab} />
      <Button isSelected={this.state.activeTab}/>
      <Button isSelected={this.state.activeTab}/>

    </div>
  )
}


}

export default App;
