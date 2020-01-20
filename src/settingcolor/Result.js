import React, {Component} from 'react';

class Result extends Component{
	setStyle(){
		return {
			color : this.props.color,
			borderColor: this.props.color,
			fontSize: this.props.fontSize,
		};
	}

	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 sizetext">
				<p>color: {this.props.color} - front size: {this.props.fontSize}px</p>
				<div 
				style={this.setStyle()} > 
				Noi dung setting: 
				{this.props.color}
				</div>
			</div>
		);
	}
}

export default Result;