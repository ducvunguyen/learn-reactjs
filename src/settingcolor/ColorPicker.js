import React, {Component} from 'react';

class ColorPicker extends Component{
	constructor(props){
		super(props);
		this.state = {
			colors: ['red', 'blue', 'green', 'black']
		};
	}
	showColor(color){
		return {
			backgroundColor : color,
		};
	}
	setActiveColor(color){
		this.props.onReceiveColor(color);
	}
	render(){
		var eleColors = this.state.colors.map((color, index) =>{
			return <span 
				className="color col-lg-2"
				id="color" key={index} 
				style={this.showColor(color)} 
				id={this.props.color === color ? "active" : ''}
				onClick={()=> this.setActiveColor(color)}>

			</span>
					
		});
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-info color" >
					<div className="panel-heading">
						<h3 className="panel-title">Color picker</h3>
					</div>
					<div className="panel-body">
						<div className="row">
							{eleColors}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ColorPicker;