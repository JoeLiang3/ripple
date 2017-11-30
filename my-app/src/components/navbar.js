import React, { Component } from 'react';
import '../navbar.css';
class NavBar extends Component {

  update(view) {
    console.log(this.props);
    this.props.updateContentView(view);
  }
  render() {
    return(
      // <!-- navbar -->
      <nav className ="navbar navbar-default navbar-fixed-top">
        <div className ="nav-container-fluid">
          <div className ="navbar-header">
            <a className="navbar-brand" id="nav-image" href="#"><img src={"https://image.ibb.co/gsA9vm/ripple_logo.png"} width="30" height="35" alt=""></img></a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
