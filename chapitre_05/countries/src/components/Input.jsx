
import React from "react";

class Input extends React.Component {

    
    // vali(e){
    //     const search=e.target.value
    //     console.log("valeur de event:" , search)
       
    // }

    render(e){
        
        console.log(this.props)
        return(
            <div className="offset-6 text center ">
                <input type="text" className="form-control"  />
                {/* onInput={(e)=>this.props.vali(e)} */}
                <button className="btn btn primary"onClick={(e)=>this.props.vali(e)}  >search</button>
            </div>
            
        )
    }




}


export default Input