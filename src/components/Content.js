import React, {Component} from 'react';

class Content extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.AddtoCart = this.AddtoCart.bind(this);// neu ko bind thi ko 
	// 	//truy cap cap duoc props
	// }

	// AddtoCart(){
 //    	alert(this.props.name + ' - ' + this.props.price);
 //    	console.log(this.props.name + ' - ' + this.props.price);
 //  	}
 
 // neu su dung cu phap = () {} thi ko can phai this.AddtoCart.bind(this)
 	AddtoCart2 = () =>{
    	alert(this.props.name + ' - ' + this.props.price);
    	console.log(this.props.name + ' - ' + this.props.price);
  	}

	render(){
		return(
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="thumbnail">
					<img alt={this.props.name} src={this.props.image} />
					<div className="caption">
						<h3>{this.props.name}</h3>
						<p>
							{this.props.price}
						</p>
						<p>{this.props.status}</p>
						<p>
							<a className="btn btn-primary" onClick={this.AddtoCart2}>Mua</a>
						</p>
						
					</div>
				</div>
			</div>

		);
	}
}

export default Content;