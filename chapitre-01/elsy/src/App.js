import React from "react";
import './App.css';
import'./components/Steps';
import Home from "./components/Steps";
const tempMin=-20
const tempMax =40 
const heartMin =80
const heartMax =180
const stepsMin =0
const stepsMAx =5000

class App extends React.Component {
  render() {
    return (
      <div class="container-fluid">
      <div class="row">
        <Home/>
        <p>Heart : {heartMin}</p>
        <p>Temperature :{tempMin}</p>
        <p>Steps :{stepsMin}</p>
        


      </div>
        
      </div>
    );
  }
}

export default App;