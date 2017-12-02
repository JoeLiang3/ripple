import React, { Component } from 'react';
import { render } from 'react-dom'
import '../submission.css'
import logo from '../ripple_logo.png';

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      member: ''
    }
  }
  render() {
    return(
    <div>
    <div className="prompt">
      The Ripple team thanks you for your submission!
    </div>

    <div className="submission-logo">
      <img src={logo} width="200" height="250" alt="Logo" />

    </div>
    </div>

  );

  }
}




export default Submission;
