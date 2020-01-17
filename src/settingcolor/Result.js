import React, {Component} from 'react';

class Result extends Component{
	showColor(){
		console.log(this.props.color);
		return {
			color : this.props.color,
		};
	}

	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sizetext">
				<p>color: red - front size: 15px</p>
				<div 
				style={this.showColor()} > 
				Noi dung setting
				{this.props.color}
				</div>
			</div>
		);
	}
}

export default Result;