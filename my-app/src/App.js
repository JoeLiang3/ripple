import React, { Component } from 'react';

import Login from './Login';   // Change all log in to SignupForm to show the Signupform

import SignupForm from './SignupForm';

class App extends Component {
  render() {
    return (

        <div className="row" >
            <div className="col-md-4 col-md-offset-4">
                <Login />
            </div>
        </div>

    );
  }
}

export default App;
