import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <nav className ="navbar navbar-default navbar-fixed-top">
        <div className ="container-fluid">
          <div className ="navbar-header">
            <a className="navbar-brand" id="nav-image" href="#"><img src={"https://image.ibb.co/gsA9vm/ripple_logo.png"} width="30" height="30" alt=""></img></a>
          </div>
          <ul className ="nav navbar-nav navbar-right">
            <li id='signup'><a href="#">Signup</a></li>
            <li id='login'><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>


    );
  }
}

export default NavBar;
