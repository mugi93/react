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
    fetch("http://localhost:9001/country/" + country)
      .then(res => res.json())
      .then(countries => {
        const names = countries[0].name
        const capitals = countries[0].capital
        const flags = countries[0].flag
        const populations = countries[0].population
        const regions = countries[0].region

        this.setState({
          name: names,
          capital: capitals,
          flag: flags,
          population: populations,
          region: regions
        });


      })
    }

    search(e){
      console.log("e:",e)

      // if(this.state.name===count){
      //   return (
      //     <div className="border border-primary offset-4 col-3 text-center" style={{width:"600px"}}>
      //     <Card flag={this.state.flag} count={this.state.name} capi={this.state.capital} regi={this.state.region} popu={this.state.population} />
          
      //   </div>)
      // }else {
      //   <Input value={this.state.name} />
      // }
    }

  render() {


    return (

      <div>
        <div className="btn-group offset-3 col-2" >
          {/* <Button click={() => this.getCountry("France")}>France</Button>
          <Button click={() => this.getCountry("Croatia")}>Croatia</Button>
          <Button click={() => this.getCountry("Brazil")}>Brazil</Button> */}
          <Input value={()=>this.search()}/>
        </div>

        <div className="border border-primary offset-4 col-3 text-center" style={{width:"600px"}}>
          <Card flag={this.state.flag} count={this.state.name} capi={this.state.capital} regi={this.state.region} popu={this.state.population} />
          
        </div>

      </div >
    )


  }

}

export default App;