import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"
import Card from "./components/Card"
import Input from "./components/Input"

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
    this.search = this.search.bind(this)
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
  // getCountry(country) {
  //   fetch("http://localhost:9001/country/" + country)
  //     .then(res => res.json())
  //     .then(countries => {
  //       console.log(countries);
  //       const names = countries[0].name
  //       const capitals = countries[0].capital
  //       const flags = countries[0].flag
  //       const populations = countries[0].population
  //       const regions = countries[0].region

  //       this.setState({
  //         name: names,
  //         capital: capitals,
  //         flag: flags,
  //         population: populations,
  //         region: regions
  //       });


  //     })
  // }

  search(e) {

    // console.log("search value:",e.target.value)
    const value = e.target.value
    // console.log(value)

    // if (value.lenght > 4) {
      fetch("http://localhost:9001/country/" + value)
        .then(res => res.json())
        .then(values => {

          console.log(values)
          const names = values[1].name
          const capitals = values[1].capital
          const flags = values[1].flag
          const populations = values[1].population
          const regions = values[1].region

          this.setState({
            name: names,
            capital: capitals,
            flag: flags,
            population: populations,
            region: regions
          });
        })
    // }
  }


  render() {


    return (

      <div>
        <div className="btn-group offset-3 col-2" >
          <Button click={() => this.getCountry("France")}>France</Button>
          <Button click={() => this.getCountry("Croatia")}>Croatia</Button>
          <Button click={() => this.getCountry("Brazil")}>Brazil</Button>

        </div>
        <div className="offset-3 col-2">
          <Input vali={this.search} />
        </div>
        
        <div className="border border-primary offset-4 col-3 text-center" style={{ width: "600px" }}>
          <Card flag={this.state.flag} count={this.state.name} capi={this.state.capital} regi={this.state.region} popu={this.state.population} />

        </div>

      </div >
    )


  }

}

export default App;