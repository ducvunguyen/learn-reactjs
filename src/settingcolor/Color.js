import React, {Component} from 'react';
import '../settingcolortext.css';
import Result from './Result';
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';

class Color extends Component{
	constructor(props){
		super(props);
		this.state = {
			color: 'black',
			fontsize: 12,
		}
	}
	onSetColor =(color)=>{
		this.setState({
			color: color,
			fontsize: 12
		});
	}
	render(){
		return(
			<div className="container mt-50">
				<div className="row">
			{/*this.state.color se dc mac dinh mau den khi truyen vao ColorPicker*/}
			{/*color va onReceiveColor la props tuc la this.props.color or this.props.onReceiveColor*/}
					<ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
					<SizeSetting />
					<Result color={this.state.color} />
				</div>
			</div>
		);
	}
}

export default Color;