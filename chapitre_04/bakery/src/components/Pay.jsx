import React from "react";
import Card from "./Card"
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket:"",
            total:0,
            totalTVA:0,
            totalTTC:0,
            totalEcoTax:0
            }
    }

handleSelect(name,price){
    console.log(name)
    console.log(price);
    const totals=+ price
    const tva=totals+20/100
    const totalTVA= tva+totals
    const eco=this.state.basket.name.length*0.3
    const ttc=eco+totalTVA
    this.setState({
        basket:{
           name,
            price
        },
        total:totals,
        totalEcoTax:eco,
        totalTVA:totalTVA,
        totalTTC:ttc



    })


}



    render(){
        return(
            <div>
                
               
                {/* <p>{this.state.totalEcoTax}</p>
                <p>{this.state.totalTVA}</p>
                <p>{this.state.totalTTC}</p>
                <p>{this.state.total}</p> */}
                <ul> 
                    {this.props.items.map(item=>{
                        return <li><Card productName={item.productName} price={item.price} onClick={this.handleSelect}/></li>
                    })}
                </ul>
            </div>
        )
    }

}
export default Pay