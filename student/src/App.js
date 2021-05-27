import React, { Component } from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './views/Student'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Students</h1>


          <Switch>
            <Route path="/" exact>
              <Student />

            </Route>

            <Route path="studentAdded" exact>

            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}





