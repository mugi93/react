import React, { Component } from 'react'
import Cards from './component/Cards';
import Poke from './component/Poke';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    name: "",
    image: "",
    pokemon: []
  }
  this.pokedex=this.pokedex.bind(this)
  this.poked=this.poked.bind(this)
  }

  
  componentDidMount() {
    for (let id = 1; id < 150; id++) {
      const url = "https://pokeapi.co/api/v2/pokemon-form/" + id



      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log("data in popular component did mount", data);

          this.setState({
            pokemon: [...this.state.pokemon, data],
            name: data.pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          })
        })
    }
  }

  pokedex() {
    
   const poke= this.state.pokemon.map(elem => {
      return <Cards name={elem.name} image={elem.sprites.front_default} />
      // <button><Cards name={elem.name} image={elem.sprites.front_default} /></button>   
      })
      return poke


  }
  // poked(){
  //   return <Poke image={this.state.pokemon[0].sprites.front_default}/>
  // }



  render() {
    console.log("poke", this.state.pokemon);
    return (
      <> 
       <div>
         {this.poked()}
       </div>
      <div className="col-6" style={{ cursor: "pointer" }}>
        
     
        {this.pokedex()}
        

      </div>
      </>
    )
  }
}
