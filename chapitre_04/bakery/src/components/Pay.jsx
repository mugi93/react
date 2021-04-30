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
    const eco=
    this.setState({
        basket:{
            name,
            price
        },
        total:totals,
        totalEcoTax:o,
        totalTVA:totalTVA,
        totalTTC:totalEcoTax+totalTVA



    })


}



    render(){
        return(
            <div>
                <Card productName="croissant.png"/>
                {this.props.items}
                <p>{this.state.total}</p>
                <ul>
                    {this.props.items.map(item=>{
                        return <li><Card productName={item.name} price={item.price} onClick={this.handleSelect}/></li>
                    })}
                </ul>
            </div>
        )
    }

}
export default Pay