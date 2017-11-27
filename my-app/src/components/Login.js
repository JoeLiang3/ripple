import React from 'react';

class Login extends React.Component{
  constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
      this.setState({[e.target.name]: e.target.value});

  }

  onSubmit(e) {

      e.preventDefault();
      console.log(e);
      console.log(this.state);
  }

  //   toast(msg){
  //   var div = document.createElement('DIV');
  //   div.id = 'toast';
  //   div.className = 'show';
  //   var text = document.createTextNode(msg);
  //   div.appendChild(text);
  //   document.body.appendChild(div);
  //
  //   setTimeout(function(){
  //       div.className = div.className.replace("show", "");
  //       div.parentNode.removeChild(div);
  //   }, 3000);
  //
  // }

  render(){
      return(
          <form onSubmit ={this.onSubmit}>
    <center><img src={"https://files.slack.com/files-pri/T7HRTJLMC-F7P0FT830/ripple_logo.png"} width="40" height="50" alt="ripple logo" /></center>
<h1> Login</h1>

        <div className="form-group6" >
            <input className="login1"
              border-radius = "0px"
              onChange= {this.onChange}
              value={this.state.username}
              placeholder = "Username"
              type="text"
              name="username"
            />
            </div>

          <div className="form-group7">
              <input className="login2"
                onChange= {this.onChange}
                value={this.state.password}
                placeholder = "Password"
                type="password"
                name="password"
              />
              </div>

                <div className="form-group8">
                  <button className="btn2 btn-primary btn-lg">
                    <b>Login </b>
                  </button>
                </div>
                  <div className="newlink">

                <center><a href="SignupForm.js">New User? Click here to Sign Up!</a> </center>
                  </div>
          </form>
      );
  }
}

export default Login;
