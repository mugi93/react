import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./views/Home"
import Weekly from  "./views/Weekly"
import WeeklyBattle from "./views/WeeklyBattle"
import Popular from "./views/Popular"
import PopularBattle from "./views/PopularBattle"
import Favorites from "./views/Favorites"
    



export default class App extends Component {
      render() {
        return (
          <div>
            <BrowserRouter> 
        <div>
          <nav> 
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weeklyb">WeeklyBattle</Link></li>
              <li><Link to="/popu">Popular</Link></li>
              <li><Link to="/popub">PopularBattle</Link></li>
              <li><Link to="/favo">Favorites</Link></li>
            </ul>
          </nav>

          <Switch> 
            <Route exact path="/" component={Home}/> 
						<Route path="/weekly" component={Weekly}/>
            <Route path="/weeklyb" component={WeeklyBattle}/>
            <Route path="/popu" component={Popular}/>
            <Route path="/popub" component={PopularBattle}/>
            <Route path="/favo" component={Favorites}/>
            
          </Switch>
        </div>
      </BrowserRouter>
          </div>
        )
      }
    }
    