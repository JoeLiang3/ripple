import React, { Component } from 'react';
import { render } from 'react-dom'
import '../rate.css'


class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      member: []
    }
  }

  setRating(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleClick() {
    console.log(this.state.value);
  }

  componentDidMount(){
     fetch('http://localhost:3001/member', {
         mode: "cors",
         headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         }
       })
     .then((response) => response.json())
     .then(response => {
         console.log(response.memberData);
       this.setState({
         member : response.memberData,
       });
       });
  };


  render() {
    var memberComponents = this.state.member.map(function(member, i) {
    return(
      <div className="wrap-header">
        //Header
        <div className="rate-header">
          <h1>
            [insert elected official name]
          </h1>
        </div>

        //Profile Image
        <div className="profile-image">
          <img src={"https://theunitedstates.io/images/congress/original/"+member.photo+".jpg"} width="170" height="200" alt="" />
        </div>

        <div className="profile-info">
          <ul>
            <li>Party: {member.party}</li>
            <li>State: {member.homeState}</li>
            <li>Position: {member.position}</li>
            <li>Date of Birth: {member.DoB}</li>
            <li>Office Address: {member.office}</li>
            <li>Phone Number: {member.phone}</li>
            <li>Website: {member.siteURL}</li>
            <li># of Votes: {member.totalVotes}</li>
            <li># of Votes Missed: {member.missedVotes}</li>
            </ul>
        </div>

        <div className="rating-display">
          Ripple Rating:
        </div>

        <div class="dropdown">
          <button class="dropbtn">Rate Here</button>
          <div class="dropdown-content">

        <div onChange={this.setRating.bind(this)}>
            <fieldset className="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Very Popular - 5 stars">&#9734;</label>
                <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Popular - 4 stars">&#9734;</label>
                <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Neutral - 3 stars">&#9734;</label>
                <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Unpopular - 2 stars">&#9734;</label>
                <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Very Unpopular - 1 star">&#9734;</label>
            </fieldset>
        </div>
            <button onClick={(e) => this.handleClick(e)}>
              <div className="go-button">
                Go!
              </div>
            </button>
          </div>
        </div>

      </div>

    );
});
  }
}



export default Rate;

//FETCH FOR API
