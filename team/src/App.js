import React from "react";
import City from"./city/city.js";



const listTeam=[ 

  {name:"Arsenal",colors:"red"},
  {name:"Manchester United",colors:"red"},
  {name:"Manchester City",colors:"purple"},
  {name:"Tottenham",colors:"white"},
];

class App extends React.Component{
  render(){
    return (
      <div>
        <h1 style={{color:"red"}}>Liste d'equipe:</h1>
        {listTeam.map((elem)=>{console.log(elem)
          return (<City color={elem.colors} nameTeam={elem.name}/>)
        })}
       
      </div>

    );
  }

}

export default App;
