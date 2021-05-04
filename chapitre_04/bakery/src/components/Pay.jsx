import React from "react";
import Card from "./Card"
class Pay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basket:[],
            total:0,
            totalTVA:0,
            totalTTC:0,
            totalEcoTax:0
            }
            this.handleSelect=this.handleSelect.bind(this)
    }

handleSelect(price,name){
    console.log(name)
    console.log(price);
    let totals=+ price 
    let tva=totals+20/100
    let totalTVA= tva+totals
    let eco=this.props.items.length*0.3
    let ttc= eco+totalTVA
    
    this.setState({
        basket:[{
           name,
            price
        }],
        total:totals,
        totalEcoTax:eco,
        totalTVA:totalTVA,
        totalTTC:ttc



    })


}

// rendercondi(){
//     if (this.state.basket.length===0){
//         return (
//             <h1>NO ITEMS ARE AVAILABLE</h1>
//         )
//     }else{
//         return(
//             <div>
                
//                 <ul> 
//                     {this.props.items.map(item=>{
//                         return <li><Card productName={item.name} price={item.price} onClick={this.handleSelect}/></li>
//                     })}
//                 </ul> 
//                 <p>totalEcoTax:{this.state.totalEcoTax}</p>
//                 <p>totalTVA:{this.state.totalTVA}</p>
//                 <p>totalTTC:{this.state.totalTTC}</p>
//                 <p>total:{this.state.total}</p>
//             </div>
//         )
//     }
// }

    render(){
        return(
                        <div>
                            
                            <ul> 
                                {this.props.items.map(item=>{
                                    return <li><Card productName={item.name} price={item.price} onClick={this.handleSelect}/></li>
                                })}
                            </ul> 
                            <p>totalEcoTax:{this.state.totalEcoTax}</p>
                            <p>totalTVA:{this.state.totalTVA}</p>
                            <p>totalTTC:{this.state.totalTTC}</p>
                            <p>total:{this.state.total}</p>
                        </div>
                    )
        // return(
        //     <div>
        //         {this.rendercondi()}
        //     </div>
        // )
    }

}
export default Pay