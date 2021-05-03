import React from "react";
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1+"euros"
        }
        this.updatePrice = this.updatePrice.bind(this)
        this.updateProductName = this.updateProductName.bind(this)
        this.ajouter = this.ajouter.bind(this)
    }
    updateProductName(e) {
        this.setState({
            productName: e.target.value
        })


    }
    updatePrice(e) {
        this.setState({
            price: e.target.value+" euros"
        })

    }
    ajouter() {
        this.props.onClickAdd(this.state.productName, this.state.price)

    }

    render() {
        return (
            <div className="col-5">
                <div className="mb-3  input-group ">
                    <input type="texte" className="form-control" placeholder="item" onChange={this.updateProductName} value={this.state.productName} ></input>

                    <button className="btn btn-primary" onClick={this.ajouter}>Add</button>
                </div>

                <input type="range" id="customRange2" style={{ width: "450px" }} className="form-range" min="1" max="10" onChange={this.updatePrice} ></input>
                <p>{this.state.price}</p>



            </div>




        )
    }

}
export default Add