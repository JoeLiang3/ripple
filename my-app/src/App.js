import React, { Component } from 'react';
import NavBar from "./components/navbar";
import MainContent from "./components/maincontent";
import SideBar from './components/sidebar';
import Officials from './components/officials';
import Login from './components/Login';
import SignupForm from './components/signup';
import Feed from './components/feed';
import Bill from './components/bill';
import billSearch from './components/billSearch';
import Rate from './components/rate';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "Feed",
      memberID: 0,
      billID: 0
   };
  }

  updateContentView = (View) => {
    this.setState({page: View});
  }

  updateMember = (id) => {
     this.setState({memberID: id});
     this.setState({page: "Individual"});
 }

 updateBill = (id) => {
    this.setState({billID: id});
    this.setState({page: "billPage"});
}


  render() {
    var view;

    if(this.state.page === "Feed") {
      view = <Feed
      updateContentView={this.updateContentView}
      updateBill={this.updateBill}
      />
   }
   else if(this.state.page === "billSearch"){
      view=<billSearch
      />
   }
   else if(this.state.page === "billPage"){
      view=<Bill
      id={this.state.billID}
      />
   }
   else if(this.state.page === "Individual"){
      view=<Rate
      id={this.state.memberID}
      />
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
      updateMember={this.updateMember}
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
