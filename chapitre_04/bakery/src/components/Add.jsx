import React from "react";
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1
        }
        this.updatePrice = this.updatePrice.bind(this)
        this.updateProductName = this.updateProductName.bind(this)
        this.ajouter=this.ajouter.bind(this)
    }
    updateProductName(e) {
        this.setState({
            productName: e.target.value
        })


    }
    updatePrice(e) {
        this.setState({
            price: e.target.value
        })

    }
    ajouter(){
        this.props.onClickAdd(this.state.productName,this.state.price)

    }

    render() {
        return (
            <div>
                <div className="mb-3">
                <input type="texte" placeholder="item" onChange={this.updateProductName} value={this.state.productName} ></input>
                <button className="btn btn-primary" onClick={this.ajouter}>Add</button>
                </div>
                
                <input type="range" min="1" max="10" onChange={this.updatePrice} value={this.state.price}></input>


            </div>




        )
    }

}
export default Add