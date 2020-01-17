import React, {Component} from 'react';

//day la cach ko dung thong thuong
// function Header() {
//   return (
//     <h2>This is header</h2>
//   );
// }

//day la cach dung es6

class Header extends Component {
  render(){
    return (
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand">Learn react</a>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a>Trang chu</a>
                </li>
                <li>
                  <a>Danh sach san pham</a>
                </li>
              </ul>
            </div>
          </nav>
      );
  }
}

export default Header;
