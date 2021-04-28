import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""

    }
  }

  // componentDidMount() {
  //   fetch("https://restcountries.eu/rest/v2/name/france")
  //     .then(res => res.json())
  //     .then(france => {
  //       const name = france.map((elem) => {
  //         return elem.name
  //       })
  //       const flag = france.map((elem) => {
  //         return elem.flag
  //       })
  //       const capital = france.map((elem) => {
  //         return elem.capital
  //       })
  //       const population = france.map((elem) => {
  //         return elem.population
  //       })
  //       const region = france.map((elem) => {
  //         return elem.region
  //       })
  //       this.setState({
  //         name: name,
  //         capital: capital,
  //         flag: flag,
  //         population: population,
  //         region: region
  //       });
  //     })
  // }
  getCountry(country) {
    fetch("https://restcountries.eu/rest/v2/name/" + country)
      .then(res => res.json())
      .then(countries => countries[0].name)
      .then(capital => capital[0].capital)
      .then(flag => flag[0].flag)
      .then(population => population[0].population)
      .then(region => region[0].region)

        
        this.setState({
          name: countries,
          capital: capitals,
          flag: flag,
          population: population,
          region: region
        });


      })
  }
  
  render() {


    return (

      <div>
        <Button click={() => this.getCountry("France")}>France</Button>
        <Button click={() => this.getCountry("Brazil")}>Brazil</Button>
        <Button click={() => this.getCountry("Croatia")}>Croatia</Button>

        <ul>
          <li>Country:{this.state.name} </li>
          <li>Capital:{this.state.capital}</li>
          <li>{this.state.flag}</li>
          <li>Population:{this.state.population}</li>
          <li>Region:{this.state.region}</li>
        </ul>


      </div >
    )


  }

}

export default App;