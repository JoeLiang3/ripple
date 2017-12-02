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
        <img src={CoverPhoto}  alt="" />
      </div>
      </div>
    );
  }
}

export default AboutUs;
