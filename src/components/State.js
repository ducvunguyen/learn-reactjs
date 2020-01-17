import React, {Component} from 'react';

//state co the hieu nhu cac trang thai cua component
//khoi tao state o contructor


class State extends Component{
	constructor(props){
	
		super(props);
		this.state = {
			nasa: [
				{
					name: 'nam',
					id: 123,
					address: 'nasa',
					status: true
				},
				{
					name: 'na',
					id: 123,
					address: 'nasa',
					status: true
				},
				{
					name: 'huong',
					id: 123,
					address: 'nasa',
					status: true
				},
			],
			isActive: true,
		};
	}
	onSetState =()=>{
		if(this.state.isActive===true){
			//ham setState la sua lai trong this.state
			this.setState({
				isActive: false
			})
		}
		else{
			this.setState({
				isActive: true,
			});
		}
	}
	render(){

		var elements = this.state.nasa.map((q,r) => {
			return 	<tr key={r}>
						<td>{q.id}</td>
						<td>{q.name}</td>
						<td>{q.address}</td>
						<td>{q.status===true ? 'Active' : 'Pending'}</td>
					</tr>
			
			
		});
		
		return(
			<div className="container-fluid">
				<h3>State</h3>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>STT</th>
							<th>San pham</th>
							<th>Gia</th>
							
						</tr>
					</thead>
					<tbody>
						{elements}
					</tbody>			
				</table>
				<button type="button" className="btn btn-default" onClick={this.onSetState}>Active: {this.state.isActive === true ? 'Active' : 'Pendding'}</button>
			</div>
		);
	}
}

export default State;