import React, {Component} from 'react';

class Reset extends Component{
	setReset =(value)=>{
		this.props.onResetSize();
		this.props.onResetColor();
	}

	render(){
		return(
			<button type="button" className="btn btn-default" onClick={this.setReset}>resart</button>
		);
	}
}

export default Reset;