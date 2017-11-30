import React, { Component } from 'react';
import NavBar from "./components/navbar";
import MainContent from "./components/maincontent";
import SideBar from './components/sidebar';
import Officials from './components/officials';
import Login from './components/Login';
import SignupForm from './components/signup';
import Feed from './components/feed';
import Bill from './components/bill';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "Feed",
      membersID: 0,
   };
  }

  updateContentView = (View) => {
    this.setState({page: View});
  }

  updateMembers = (id) => {
     this.setState({membersID: id});
     this.setState({page: "Individual"});

 }


  render() {
    var view;

    if(this.state.page === "Feed") {
      view = <Feed />
   }
    else if(this.state.page === "Bill") {
      view = <Bill />
    } else if(this.state.page === "Timeline") {

      return (
        <div>
          <NavBar
            updateContentView={this.updateContentView}
          />
          <SideBar
            updateContentView={this.updateContentView}
          />
          <MainContent />
        </div>
      );

    } else if(this.state.page === "officials") {
      view = <Officials
      updateMembers={this.updateMembers}
      updateContentView={this.updateContentView}
      />
    } else if(this.state.page === "login") {
      view = <Login />
    } else if(this.state.page == "signup") {
      view = <SignupForm/ >;
   }

    return (
      <div>
        <NavBar
          updateContentView={this.updateContentView}
        />
        <SideBar
          updateContentView={this.updateContentView}
        />
        {view}
      </div>
    );


  }
}

export default App;
