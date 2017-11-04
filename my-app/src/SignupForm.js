import React from 'react';

class SignupForm extends React.Component{
  constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
          passwordConfirmation: '',
          email: '',
        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    var a = "";
    var b = "";
      this.setState({[e.target.name]: e.target.value});
      a = document.getElementById("confirm");
      a.style.background= "white";
      b = document.getElementById("pwconfirm");
      b.style.opacity = 0;
      a = document.getElementById("mail");
      a.style.background= "white";
      b = document.getElementById("mailinfo");
      b.style.opacity = 0;

  }

  onSubmit(e) {
      var x = "";
      var y = "";
      e.preventDefault();
      console.log(e);
      console.log(this.state);
      if(!this.state.email.includes("@")){
        x = document.getElementById("mail");
        x.style.background= "#FDB5B5";
        y = document.getElementById("mailinfo");
        y.style.opacity = 1;
      }
      else{
        x = document.getElementById("mail");
        x.style.background= "white";
        y = document.getElementById("mailinfo");
        y.style.opacity = 0;
      }

      if(this.state.password !== this.state.passwordConfirmation){
          console.log("wrong password");
          x = document.getElementById("confirm");
          x.style.background= "#FDB5B5";
          y = document.getElementById("pwconfirm");
          y.style.opacity = 1;
      }
      else{
        console.log("Success!");
        x = document.getElementById("confirm");
        x.style.background= "white";
        y = document.getElementById("pwconfirm");
        y.style.opacity = 0;
      }
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
<h1> Join our community!</h1>

        <div className="form-group1" >
          <label className="control-label"><b>Username:</b>  </label>
            <input
              onChange= {this.onChange}
              value={this.state.username}
              type="text"
              name="username"
              className="form-control"
            />
            </div>


          <div className="form-group2">
            <label className="control-label"><b>Password: </b> </label>
              <input
                onChange= {this.onChange}
                value={this.state.password}
                type="password"
                name="password"
                className="form-control"
              />
              </div>


            <div className="form-group3">
              <label className="control-label"><b>Password Confirmation: </b> </label>
                <input
                  id = "confirm"
                  onChange= {this.onChange}
                  value={this.state.passwordConfirmation}
                  type="password"
                  name="passwordConfirmation"
                  className="form-control"
                />
                <p className = "pwconfirm" id = "pwconfirm"> Passwords do not match!</p>

                </div>


              <div className="form-group4">
                <label className="control-label"><b>Email: </b>  </label>
                  <input
                    id = "mail"
                    onChange= {this.onChange}
                    value={this.state.email}
                    type="text"
                    name="email"
                    className="form-control"
                  />
                  <p className = "mailinfo" id = "mailinfo"> Invalid email</p>
                  </div>
                <div className="form-group5">
                  <button className="btn btn-primary btn-lg">
                    <b>Sign Up </b>
                  </button>
                </div>
          </form>
      );
  }
}

export default SignupForm;
