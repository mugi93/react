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
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <Home>
            {this.props.icon = "local_drinks"}
            {this.props.color = "#3A85FF"}
            {this.props.value = 1.5}
            {this.props.unit = "L"}
            </Home>       {/* water */}
            
            
            <Home></Home>        {/*Steps  */}
            <Home></Home>        {/*heart  */}
            <Home></Home>          {/* temperature */}
            <p>Heart : {heartMin}</p>
            <p>Temperature :{tempMin}</p>
            <p>Steps :{stepsMin}</p>
        </div>


      

      </div>
    );
  }
}

export default App;