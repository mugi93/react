import React from "react";

class City extends React.Component{
    render(){
        return(
            <div>
                <h2 style={{color:this.props.color,backgroundColor:"black"}}>Team is: {this.props.nameTeam} and it is colors: {this.props.color}</h2>
                
                
            



            </div>
            
        );
    }
}
export default City;