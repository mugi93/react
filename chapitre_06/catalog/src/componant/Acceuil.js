import React from "react";
import {BrowserRouter, Route, Link, Switch } from "react-router-dom";
import movies from "../movies.json"

class Acceuil extends React.Component {

    constructor() {
        super()


        this.render2 = this.render2.bind(this)


    }



    render2() {

        return (
            
                movies.map(elem => {
                    console.log(elem)
                    return <li><Link>{elem.title}</Link></li>
                })

           

        )


    }

    render() {
        console.log(movies)

        return (
             <BrowserRouter> 
        <div>
          <nav> 
            <ul>
              {this.render2()}
            </ul>
          </nav>
          </div>
            
        </BrowserRouter>
        )
    }
}
export default Acceuil