import React from "react";
import Acceuil from "./component/Acceuil"

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movieinfo from "./component/Movieinfo";


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