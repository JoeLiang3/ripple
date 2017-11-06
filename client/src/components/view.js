import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: '',
      officialArray: []
    };
  }



  changeState(state) {
    console.log(state);
    // Fetch senator info from API
    fetch('http://localhost:3001/members/' + state, {
      mode: "cors",
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
    .then((response) => response.json())
    .then(response => {
      this.setState({
        // Update state
        officialArray: response.membersResult,
        currentState: state,
      });
      console.log(response.membersResult);
    })


  }


  render() {
    // Map state officialArray to an array of Profile components
    var officialComponents = this.state.officialArray.map(function(members, i) {
            return  <div className="profile-image" key={i}>
              <img src={"https://theunitedstates.io/images/congress/original/"+members.photo+".jpg"} width="90" height="110" alt="" />
                <p>Name: {members.name}</p>
                <p>Party: {members.party}</p>
                <p>Phone Number: {members.phone}</p>
                <p>Position: {members.position}</p>
            </div>;
        });
    return(
      <div id="page-content-wrapper">
        <div className="content-header text-center middle">
            <h1>
              Elected Officials
            </h1>
        </div>

        <div className="page-content text-center middle">
          <div className="state-container">
            <div className="state" onClick={(event) => this.changeState("Alaska")}>AL</div>
            <div className="state" onClick={(event) => this.changeState("Alabama")}>AK</div>
            <div className="state" onClick={(event) => this.changeState("Arizona")}>AZ</div>
            <div className="state" onClick={(event) => this.changeState("Arkansa")}>AR</div>
            <div className="state" onClick={(event) => this.changeState("California")}>CA</div>
            <div className="state" onClick={(event) => this.changeState("Colorado")}>CO</div>
            <div className="state" onClick={(event) => this.changeState("Connecticut")}>CT</div>
            <div className="state" onClick={(event) => this.changeState("Delaware")}>DE</div>
            <div className="state" onClick={(event) => this.changeState("Florida")}>FL</div>
            <div className="state" onClick={(event) => this.changeState("Georgia")}>GA</div>
            <div className="state" onClick={(event) => this.changeState("Hawaii")}>HI</div>
            <div className="state" onClick={(event) => this.changeState("Idaho")}>ID</div>
            <div className="state" onClick={(event) => this.changeState("Illinois")}>IL</div>
            <div className="state" onClick={(event) => this.changeState("Iowa")}>IN</div>
            <div className="state" onClick={(event) => this.changeState("Kansas")}>IA</div>
            <div className="state" onClick={(event) => this.changeState("Kentucky")}>KS</div>
            <div className="state" onClick={(event) => this.changeState("Louisiana")}>KY</div>
            <div className="state" onClick={(event) => this.changeState("Maine")}>LA</div>
            <div className="state" onClick={(event) => this.changeState("Maryland")}>ME</div>
            <div className="state" onClick={(event) => this.changeState("Massachutsetts")}>MD</div>
            <div className="state" onClick={(event) => this.changeState("Michigan")}>MI</div>
            <div className="state" onClick={(event) => this.changeState("Minnesota")}>MN</div>
            <div className="state" onClick={(event) => this.changeState("Mississippi")}>MS</div>
            <div className="state" onClick={(event) => this.changeState("Missouri")}>MO</div>
            <div className="state" onClick={(event) => this.changeState("Montana")}>MT</div>
            <div className="state" onClick={(event) => this.changeState("Nebraska")}>NE</div>
            <div className="state" onClick={(event) => this.changeState("Nevada")}>NV</div>
            <div className="state" onClick={(event) => this.changeState("New Hampshire")}>NH</div>
            <div className="state" onClick={(event) => this.changeState("New Jersey")}>NJ</div>
            <div className="state" onClick={(event) => this.changeState("New Mexico")}>NM</div>
            <div className="state" onClick={(event) => this.changeState("New York")}>NY</div>
            <div className="state" onClick={(event) => this.changeState("North Carolina")}>NC</div>
            <div className="state" onClick={(event) => this.changeState("North Dakota")}>ND</div>
            <div className="state" onClick={(event) => this.changeState("Ohio")}>OH</div>
            <div className="state" onClick={(event) => this.changeState("Oklahoma")}>OK</div>
            <div className="state" onClick={(event) => this.changeState("Oregon")}>OR</div>
            <div className="state" onClick={(event) => this.changeState("Pennsylvania")}>PA</div>
            <div className="state" onClick={(event) => this.changeState("Rhode Island")}>RI</div>
            <div className="state" onClick={(event) => this.changeState("South Carolina")}>SC</div>
            <div className="state" onClick={(event) => this.changeState("South Dakota")}>SD</div>
            <div className="state" onClick={(event) => this.changeState("Tennessee")}>TN</div>
            <div className="state" onClick={(event) => this.changeState("Texas")}>TX</div>
            <div className="state" onClick={(event) => this.changeState("Utah")}>UT</div>
            <div className="state" onClick={(event) => this.changeState("Vermont")}>VT</div>
            <div className="state" onClick={(event) => this.changeState("Virginia")}>VA</div>
            <div className="state" onClick={(event) => this.changeState("Washington")}>WA</div>
            <div className="state" onClick={(event) => this.changeState("West Virginia")}>WV</div>
            <div className="state" onClick={(event) => this.changeState("Wisconsin")}>WI</div>
            <div className="state" onClick={(event) => this.changeState("Wyoming")}>WY</div>
          </div>
        </div>

        <div className="page-content">
          <div className="state-officials">
            <div className="state-header text-center">
              <div className="state-name">{this.state.currentState}</div>
            </div>
            <div className="profile-view text-center">
              <div>{officialComponents}</div>
            </div>
          </div>
        </div>
      </div>

    );

  }


}

export default View;

//FETCH FOR API