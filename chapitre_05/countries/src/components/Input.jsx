
import React from "react";

class Input extends React.Component {
    
    vali(e){
        const search=e.target.value
        console.log("valeur de event:" , search)
        return this.props.valueE(search)

    }

    render(){
        console.log(this.props)
        return(
            <div className="offset-6 text center ">
                <input type="text" className="form-control"  value={this.props.searche} onInput={this.vali}/>
                {/* <button className="btn btn primary" >search</button> */}
            </div>
            
        )
    }




}


export default Input