import React from "react";

class Button extends React.Component {
    

    render(){
        return(
            <div className="offset-6 text center ">
                <button className="btn btn-primary" onClick={this.props.click}>{this.props.children}</button>
            </div>
            
        )
    }




}


export default Button