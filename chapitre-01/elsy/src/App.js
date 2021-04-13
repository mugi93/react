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
      temperature:-10,
      steps:3000
    };
    this.onHeartChange=this.onHeartChange.bind(this)
    this.onStepsChange=this.onStepsChange.bind(this)
    this.onTempChange=this.onTempChange.bind(this)
    this.calculateWater=this.calculateWater.bind(this)
  }
  onHeartChange(e){
    this.setState({
      heart:e.target.value,
    });
    this.calculateWater()

  }
  onStepsChange(e){
    this.setState({
      steps:e.target.value,
    })
    this.calculateWater()

  }
  onTempChange(e){
    this.setState({
      temperature:e.target.value,
    })
    this.calculateWater()

  }
  calculateWater(){
    if(this.state.water>=1,5){
      if(this.state.temperature>20 ){
      const temps=this.state.temperature-20;
     
      const t= temps*0.02
      
      this.setState({
       water:this.state.water+t
     });
   }
   
   
   else if(this.state.heart >120 ){
     const h=this.state.heart-120;
     this.setState({
       water:this.state.water+(h*0.0008)
     });
    }
    else if(this.state.steps>10000 ){
      const step=this.state.steps-10000
     this.setState({
       water:this.state.water+(step*0.00002)
     })}
    }

   
  //  else if (this.state.temperature<20){
  //   this.setState({
  //     water:this.state.water-0.02
  //   })
   
  //  }else if(this.state.heart <120){
  //   this.setState({
  //     water:this.state.water-0.0008
  //   })
  // 
  
   
  //  }else if(this.state.steps<10000){
  //   this.setState({
  //     water:this.state.water-0.00002
  //   })
  // }

  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          {/* water */}
          <Home icon="local_drink" color="#3A85FF" value={this.state.water} unit="L"  />
           {/*Steps  */}
          <Home icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChangeFunction={this.onStepsChange}/>   
           {/*heart  */}
          <Home icon="favorite" color="red" value={this.state.heart} unit="bpm"  min={heartMin} max={heartMax} onChangeFunction={this.onHeartChange} /> 
          {/* temperature */}
          <Home icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChangeFunction={this.onTempChange}/> 
          
          <p>Heart : {heartMin}</p>
          <p>Temperature :{tempMin}</p>
          <p>Steps :{stepsMin}</p>
        </div>
        
      </div>
    );
  }
}

export default App;