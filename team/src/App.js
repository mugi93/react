import React from "react";
import City from"./city/city.js"
const listTeam=[
  "Arsenal",
  "Manchester United",
  "Manchester City",
  "Tottenham"
]

class App extends React.Component{
  render(){
    return (
      <div>
        <h1 style={{color:"red"}}>Liste d'equipe:</h1>
        <City list={listTeam.map(team)=>{
          return team.listTeam

        }} />
      </div>

    );
  }

}

export default App;
