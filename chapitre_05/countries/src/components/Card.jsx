import React from "react";

class Card extends React.Component {
    

    render(){
        return(
            <div  >
                <h1 className="my-5" >Country Selector</h1>
                <img className="mb-4" style={{width: "300px" }} src={this.props.flag} alt="drapeau"/>
                <h3 className="mb-4">Country: {this.props.count}</h3>
                <h4 className="mb-4">Capital: {this.props.capi}</h4>
                <h5 className="mb-4">Region: {this.props.regi}</h5>
                <h5 className="mb-4">Population: {this.props.popu}</h5>
            </div>
        )
    }




}


export default Card