import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hotel from './views/Hotel';
import Restaurant from './views/Restaurant'
import Signup from './views/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/hotel">Hotel</Link></li>
            <li><Link to="/restaurant">Restaurant</Link></li>
            {/* <li><a href="" onClick={logout}>Logout</a></li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/hotel" component={Hotel} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/signup" component={Signup}/>

        </Switch>
      </div>
    </BrowserRouter>
  )
}
