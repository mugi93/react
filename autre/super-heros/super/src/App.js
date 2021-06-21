
import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListHero from './view/ListHeros'


function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <ul>
          <li><Link to="/">Liste d'heros</Link></li>
          <li><Link to ="/heros"></Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <ListHero/>

        </Route>
        <Route exact path="/heros">

        </Route>
      </Switch>
    </BrowserRouter>

  )

}

export default App;
