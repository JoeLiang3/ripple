import React, { Component } from 'react';
import '../App.css'
class NavBar extends Component {

  update(view) {
    console.log(this.props);
    this.props.updateContentView(view);
  }
  render() {
    return(
      // <!-- navbar -->
      <nav className ="navbar navbar-default navbar-fixed-top">
        <div className ="container-fluid">
          <div className ="navbar-header">
            <a className="navbar-brand" id="nav-image" href="#"><img src={"https://image.ibb.co/gsA9vm/ripple_logo.png"} width="30" height="35" alt=""></img></a>
          </div>
          <ul className ="nav navbar-nav navbar-right">
            <li id='signup' onClick = {(event) => this.update('signup')}><a href="#">Signup</a></li>
            <li id='login' onClick = {(event) => this.update('login')}><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>


    );
  }
}

export default NavBar;
