import React from "react";
import './App.css';

import Home from "./components/box";
import './styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMAx = 5000

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature:-10,
      steps:3000
    };
  }
  onHeartChange(){
    
  }



  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <Home icon="local_drink" color="#3A85FF" value={1.5} unit="L"/>{/* water */}
          <Home icon="directions_walk" color="black" value={3000} unit="steps"/>    {/*Steps  */}
          <Home icon="favorite" color="red" value={120} unit="bpm"/>  {/*heart  */}
          <Home icon="wb_sunny" color="yellow" value={-10} unit="°C"/> {/* temperature */}
          
          <p>Heart : {heartMin}</p>
          <p>Temperature :{tempMin}</p>
          <p>Steps :{stepsMin}</p>
        </div>
        
      </div>
    );
  }
}

export default App;