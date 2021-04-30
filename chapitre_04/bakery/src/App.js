import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add";
import Button from "./components/Button";
import List from "./components/List";
import Pay from "./components/Pay"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: []


    }
    this.clickAdd = this.clickAdd.bind(this)
    this.clickList = this.clickList.bind(this)
    this.clickPay = this.clickPay.bind(this)
    this.addItem= this.addItem.bind(this)
  }

  clickAdd(e) {
    this.setState({
      activeTab: "add"
    })
  }

  clickList(e) {
    this.setState({
      activeTab: "list"
    })
  }
  clickPay(e) {
    this.setState({
      activeTab: "pay"
    })
  }
addItem(n,p){
    let it={
      name:n,
      price:p
    }
    this.setState({
      items:[...this.state.items,it]
      // items:it
    })
    console.log(this.state.items)

  }

  renderContent() {
    if (this.state.activeTab==="add") {
      return (
            <Add onClickAdd={this.addItem}/>
        );
    } if (this.state.activeTab==="list") {
      return (
        <List list={this.state.items }/>
            
        );
    } if (this.state.activeTab==="pay"){
      return(
        <Pay items={this.state.items}/>
      )
    }
  }
  
  
  
  render() {
    return (
      <div>

        <h1 className="text-center">Bakery</h1>
       <div className="offset-1">
         
         <Button isSelected={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-outline-secondary"} onClick={this.clickAdd}  >Add</Button>

        <Button isSelected={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-outline-secondary"} onClick={this.clickList} >List</Button>

        <Button isSelected={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-outline-secondary"} onClick={this.clickPay}>Pay</Button>

        {this.renderContent()}


      </div>



      </div>
      
    )
  }


}

export default App;
