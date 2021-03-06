import React from "react";
import './App.css';

import Home from "./components/box";
import './styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
    // this.calculateWater = this.calculateWater.bind(this)
  }
  onHeartChange(e) {
    this.setState({
      heart: e.target.value,
    });
    this.calculateWater()

  }
  onStepsChange(e) {
    this.setState({
      steps: e.target.value,
    })
    this.calculateWater()

  }

  onTempChange(e) {
    console.log("state 1:"+ this.state.temperature)//state temperature 1
    console.log("e.target.value" , e.target.value)
    this.setState({
      temperature: e.target.value,
    })
    console.log("state 2:"+this.state.temperature)
    this.calculateWater()

  }
  calculateWater() {
    console.log("state3:" +this.state.temperature) // state temperature 2
    if (this.state.water >= 1.5) {
      if (this.state.temperature > 20) {
        const temps = this.state.temperature - 20
        console.log(temps)

        const t = temps * 0.02
        console.log(t)
        // const p = (this.state.water + t)
        // console.log(p)

        this.setState({
          water: (t+1.5).toFixed(2)
        });
      }


      else if (this.state.heart > 120) {
        const h = this.state.heart - 120;
        this.setState({
          water: (1.5 + (h * 0.0008)).toFixed(2)
        });
      }
      else if (this.state.steps > 10000) {
        const step = this.state.steps - 10000
        this.setState({
          water: (1.5 + (step * 0.00002)).toFixed(2)
        })
      }
    


    //  else if (this.state.temperature--){

    //   this.setState({
    //     water:this.state.water-0.02
    //   })
    // }

    //  else if(this.state.heart <120){
    //   this.setState({
    //     water:this.state.water-0.0008
    //   })
    // 


    //  }else if(this.state.steps<10000){
    //   this.setState({
    //     water:this.state.water-0.00002
    //   })
    }

  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          {/* water */}
          <Home icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          {/*Steps  */}
          <Home icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChangeFunction={this.onStepsChange} />
          {/*heart  */}
          <Home icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChangeFunction={this.onHeartChange} />
          {/* temperature */}
          <Home icon="wb_sunny" color="yellow" value={this.state.temperature} unit="??C" min={tempMin} max={tempMax} onChangeFunction={this.onTempChange} />

          
        </div>

      </div>
    );
  }
}

export default App;