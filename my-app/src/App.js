import React, { Component } from 'react';
import NavBar from "./components/navbar";
import MainContent from "./components/maincontent";
import SideBar from './components/sidebar';
import Officials from './components/officials';
import Login from './components/Login';
import SignupForm from './components/signup';
import Feed from './components/feed';
import Bill from './components/bill';
import BillSearch from './components/billSearch';
import MemberSearch from './components/memberSearch';
import Rate from './components/rate';
import SearchFeed from './components/searchFeed';
import SearchFeedMember from './components/searchFeedMember';
import Submission from './components/submission';
import AboutUs from './components/aboutus';
import Faq from './components/faq';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "Feed",
      memberID: 0,
      billID: 0,
      billQuery: '',
      memberQuery: ''
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

updateQuery = (id) => {
   this.setState({billQuery: id});
   this.setState({page: "searchFeed"});
}

updateQueryMember = (id) => {
   this.setState({memberQuery: id});
   this.setState({page: "searchFeedMember"});
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
      view=<BillSearch
      updateContentView={this.updateContentView}
      updateQuery={this.updateQuery}
      />
   }
   else if(this.state.page === "searchFeed"){
      view=<SearchFeed
      query={this.state.billQuery}
      updateContentView={this.updateContentView}
      updateBill={this.updateBill}
      />
   }
   else if(this.state.page === "searchFeedMember"){
      view=<SearchFeedMember
      query={this.state.memberQuery}
      updateMember={this.updateMember}
      updateContentView={this.updateContentView}
      />
   }
   else if(this.state.page === "memberSearch"){
      view=<MemberSearch
      updateContentView={this.updateContentView}
      updateQueryMember={this.updateQueryMember}
      />
   }
   else if(this.state.page === "billPage"){
      view=<Bill
      id={this.state.billID}
      />
   }
   else if(this.state.page === "Individual"){
      view=<Rate
      updateContentView={this.updateContentView}
      id={this.state.memberID}
      />
    }
  else if(this.state.page === "aboutus"){
      view=<AboutUs
      updateContentView={this.updateContentView}
      />

   }

   else if(this.state.page === "faq"){
       view=<Faq
       updateContentView={this.updateContentView}
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
   } else if(this.state.page === "signup") {
      view = <SignupForm/ >;
   } else if(this.state.page === "submission") {
      view = <Submission
      updateContentView={this.updateContentView}
      />;
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
