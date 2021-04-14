import React from "react";
 
class Home extends React.Component {
	slide (){
		if (this.props.icon!=='local_drink') {
		 return <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChangeFunction} />
	 	}else if (this.props.icon==="directions_walk"){
			 return <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChangeFunction} steps={1000}/>
		 }
	}
	  

  render() {

 
    return (
			<div class="box col-sm-3 col-6" >

				
				<span class="material-icons" style={{fontSize:100,color:this.props.color}}  >{this.props.icon} </span>
				
				<p>{this.props.value}
				{this.props.unit}</p>
				{this.slide()}
			</div>
		)
  };
}

export default Home;