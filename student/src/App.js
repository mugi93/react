import React, { Component } from 'react'
const axios = require('axios');

export default class App extends Component {
  
  student(){
    axios.get("http://localhost:9000/students")
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
