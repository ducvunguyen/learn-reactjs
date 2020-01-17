import React, {Component} from 'react';

class Addproduct extends Component{
	AddProduct =() =>{
		console.log(this.refs.name.value);
	}
	render(){
		return(
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title">Them san pham</h3>
				</div>
				<div className="panel-body">
					<form>
					
						<div className="form-group">
							<label >Ten san pham</label>
							<input type="text" className="form-control" ref="name"/>
						</div>

						<button type="button" className="btn btn-primary" onClick={this.AddProduct}>Save</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Addproduct;