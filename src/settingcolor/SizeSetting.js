import React, {Component} from 'react';
import Reset from './Reset';

class SizeSetting extends Component{
	render(){
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-warning">
					<div className="panel-heading">
						<h3 className="panel-title">Size: 15</h3>
					</div>
					<div className="panel-body">
						<button type="button" className="btn btn-default">Tang</button>
						<button type="button" className="btn btn-default">Giam</button>
					</div>
					<Reset />
				</div>
			</div>
		);
	}
}

export default SizeSetting;