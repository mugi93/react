import React from "react";
import Acceuil from "./componant/Acceuil"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


class App extends React.Component {

  constructor() {
    super()

   

    
  }
  render(){
    
    return(
      <div>
        <Acceuil/>
      </div>
    )
  }
}
export default App