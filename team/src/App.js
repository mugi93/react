import React from "react";
import City from"./city/city.js";



const listTeam=[ 

  {name:"Arsenal",colors:"red",number:4,point:5},
  {name:"Manchester United",colors:"red",number:4,point:15},
  {name:"Manchester City",colors:"purple",number:4,point:20},
  {name:"Tottenham",colors:"white",number:4,point:10},
];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      amount:listTeam.point
    }
  }




  render(){
    return (
      <div>
        <h1 style={{color:"red"}}>Liste d'equipe:</h1>
        {listTeam.map((elem)=>{console.log(elem)
          return (<City color={elem.colors} nameTeam={elem.name} match={elem.number} amount={elem.point}/>)
        })}
       <button onClick={}>

       </button>
      </div>

    );
  }

}

export default App;
