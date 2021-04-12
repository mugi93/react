import React from "react";
 
class Home extends React.Component {
	slide(){
		if (this.props.icon==!'local_drink') {
		 return <input type="range" min={this.props.stepMin} max={this.props.stepMax} value={this.props.value} onInput/>
	 	}
	}
	  

  render() {

 
    return (
			<div class="box col-sm-3 col-6" >

				
				<span class="material-icons" style={{fontSize:100,color:this.props.color}} slide={this.slide()} >{this.props.icon} </span>
				<p>{this.props.value}</p>
				<p>{this.props.unit}</p>
			</div>
		)
  };
}

export default Home;