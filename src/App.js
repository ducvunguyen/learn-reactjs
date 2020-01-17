import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import Product from './components/Product';
import Content from './components/Content';
import Addproduct from './components/Addproduct';
import State from './components/State';

class App extends Component{
  AddtoCart(p){
      alert(p);
  }
  AddtoCart2(p){
      alert(p);
  }

  render(){
    var product = [
      {
        name: 'iphone 6',
        id: 1,
        price: 5000000,
        status:true,
        image:"https://drop.ndtv.com/TECH/product_database/images/910201410301AM_635_apple_iphone_6.jpeg"
      },
      {
        name: 'iphone 7',
        id: 2,
        price: 5000000,
        status:true,
        image:"https://static.toiimg.com/photo/71396840.cms"
      },
      {
        name: 'iphone 8',
        id: 3,
        price: 5000000,
        status:true,
        image:"https://static.toiimg.com/photo/71396840.cms"
      },
      {
        name: 'iphone 9',
        id: 4,
        price: 5000000,
        status:false,
        image:"https://static.toiimg.com/photo/71396840.cms"
      }
  ];

  var element = product.map((q, r) =>{
      if (q.status === true) {
        return <Content 
          key = {q.id}
          name = {q.name}
          price = {q.price}
          image = {q.image} 
          status = {q.status === true ? 'Active' : 'Pendding'}
        />
      }
      else{
          return <p key={q.id}>not found</p>
      }
  });
    return (
      <div className="App">
        <Header />
        <div className="row">
          {element}
        </div>
        <a onClick={() => this.AddtoCart("mua thanh cong")}>click</a>
        <br/>
        {/*them san pham*/}
        <div className="row">
          <Addproduct />
        </div>
        <div className="container-fluid">
          <State />
        </div>
      </div>
    );
  }
}

export default App;
