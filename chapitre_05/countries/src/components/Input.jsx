
import React from "react";

class Input extends React.Component {
    
    

    render(){
        return(
            <div className="offset-6 text center ">
                <input type="text" class="form-control"/>
                <button className="btn btn primary"  value={this.props.name} onInput={()=>this.props.search} >search</button>
            </div>
            
        )
    }




}


export default Input