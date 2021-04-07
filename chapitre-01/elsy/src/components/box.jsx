import React from "react";
 
class Home extends React.Component {
	

  render() {
    return (
			<div class="box col-sm-3 col-6" >
				<span class="material-icons" style={{fontSize:100,color:this.props.color}}>{this.props.icon}</span>
				<p>{this.props.value}</p>
				<p>{this.props.unit}</p>
			</div>
		)
  };
}

export default Home;