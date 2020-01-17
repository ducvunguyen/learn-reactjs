import React, {Component} from 'react'

class Product extends Component{
	showinfo(obj){
		if (obj.status===true) {
			return(
				<div>
					name: {obj.name} <br/>
					id: {obj.id} <br/>
					address: {obj.address}<br/>
					status: {obj.status === true ? 'Active' : 'Pendding'}
				</div>

			);
					
		}
		
	}

	render(){
		var obj = {
			name: 'nguyen',
			id: 123,
			address: 'nasa',
			status: true
		};

		var nasa = [
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
		];
		// q la doi tuong, index danh muc hien thi bao nhieu doi tuong
		var element = nasa.map((q, r) =>{
			return <div key={r}>
						<h2>{q.name}</h2>
						<h2>{q.id}</h2>
						<h2>{q.address}</h2>
					</div>
		});
		var a =7;
		var b = 4;
		var c = 5;
		var kq = a^2 + Math.sqrt(b,2) + c ;
		return(
			<div>
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<div className="thumbnail">
						<img src="https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x460.png" alt="iphone" />
						<div className="caption">
							<h3>Iphone 3</h3>
							<p>
								Price: 160000$
							</p>
							<p>
								<a href="#" className="btn btn-primary">Mua hang</a>
							</p>
						</div>
					</div>
					
					<div>
					{this.showinfo(obj)}
						{kq}
					
					</div>

				</div>
				<div>{element}</div>
			</div>
		);
	}
}

export default Product