import React, {Component} from 'react';
import Reset from './Reset';

class SizeSetting extends Component{
	constructor(props){
		super(props);
		this.state = {
			color: 'black',
			fontsize: 12
		}
	}
	changeSize(value){
		this.props.onChangeSize(value);
	}
	onResetSize =()=>{
		this.props.onResetSize(this.state.fontsize);
	}
	onResetColor =()=>{
		this.props.onResetColor(this.state.color);
	}
	render(){
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-warning">
					<div className="panel-heading">
						<h3 className="panel-title">Size: {this.props.fontSize}px</h3>
					</div>
					<div className="panel-body">
						<button type="button" className="btn btn-default" onClick={()=>this.changeSize(2)}>Tang</button>
						<button type="button" className="btn btn-default" onClick={()=>this.changeSize(-2)}>Giam</button>
					</div>
					<Reset onResetSize={this.onResetSize}  onResetColor={this.onResetColor}/>
				</div>
			</div>
		);
	}
}

export default SizeSetting;