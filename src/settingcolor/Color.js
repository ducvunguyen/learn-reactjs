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
		});
	}
	onChangeSize =(value)=>{
		// 8<=x<=36
		if (this.state.fontsize + value >=8 && this.state.fontsize + value <=36) {
			this.setState({
				fontsize: this.state.fontsize + value,
			});
		}
	}
	onResetSize =(value)=>{
		this.setState({
			fontsize: value
		});
	}
	onResetColor =(value)=>{
		this.setState({
			color: value,
		});
	}
	render(){
		return(
			<div className="container mt-50">
				<div className="row">
			{/*this.state.color se dc mac dinh mau den khi truyen vao ColorPicker*/}
			{/*color va onReceiveColor la props tuc la this.props.color or this.props.onReceiveColor*/}
					<ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
					<SizeSetting fontSize={this.state.fontsize} onChangeSize={this.onChangeSize} onResetSize={this.onResetSize} onResetColor={this.onResetColor}/>
					<Result color={this.state.color} fontSize={this.state.fontsize} 	/>
				</div>
			</div>
		);
	}
}

export default Color;