import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hotel from './views/Hotel';
import Restaurant from './views/Restaurant'

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/hotel">Hotel</Link></li>
            <li><Link to="/restaurant">Restaurant</Link></li>
            {/* <li><a href="" onClick={logout}>Logout</a></li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/hotel" component={Hotel} />
          <Route path="/restaurant" component={Restaurant} />

        </Switch>
      </div>
    </BrowserRouter>
  )
}
