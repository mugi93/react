import React from "react";
class Button extends React.Component {
    
    render(){
        
        return(
            <div className="btn-group mb-3">
                <button type="button"  onClick={this.props.onClick} className={this.props.isSelected} >{this.props.children}</button>
                
            </div>
        )
    }

}
export default Button