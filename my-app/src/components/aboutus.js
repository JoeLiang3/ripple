import React, { Component } from 'react';
import { render } from 'react-dom'
import CoverPhoto from '../aboutus.jpg';
import '../aboutus.css';

class AboutUs extends Component {


  render() {
    console.log('hi');
    return(
      <div>
        <div className="about-us-Header">
          <h1> About Us </h1>
        </div>

        <div className="CoverPhoto">
          <img src={CoverPhoto} height="500" width="900"  alt="" />
        </div>

        <div className="AboutUsBio">
          Ripple is a web application that connects citizens and politicians, enabling both parties with access to current legislative information and a manageable communications and review system. Our mission is to build the next platform for the next generation to be more informed and involved in politics.
        </div>

      </div>


    );
  }
}

export default AboutUs;
