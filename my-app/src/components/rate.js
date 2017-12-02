import React, { Component } from 'react';
import { render } from 'react-dom'
import '../rate.css'
import '../submission.css'
import noPic from '../missingPic.png';
import fbIcon from '../facebook-logo.png';
import twitIcon from '../twitter-icon.svg';
import YTicon from '../youtube-logo.png';
var imageExists = require('image-exists');


class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      member: ''
    }
  }


  update(id) {
     this.props.updateContentView(id);
 }
  setRating(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleClick() {
    console.log(this.state.value);
  }

  sendRating() {
    fetch('http://localhost:3001/rating/'+this.props.id+'/'+this.state.value, {
      mode: "cors",
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  componentDidMount(){
     console.log(this.props.id);
     fetch('http://localhost:3001/member/' + this.props.id, {
         mode: "cors",
         headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         }
       })
       .then((response) => response.json())
       .then(response => {
         // console.log(response);
         this.setState({member: response});
       });
  };

  render() {
     var profPic = "https://theunitedstates.io/images/congress/original/"+this.state.member.photo+".jpg";
     if(!UrlExists(profPic))
       profPic = noPic;
    return(
      <div className="wrap-header">
        //Header
        <div className="rate-header">
          <h1>
            {this.state.member.name}
          </h1>
        </div>


        <div className="rate-profile-image">
          <img src={profPic} width="200" height="225" alt="" />
        </div>

        <div className="rate-profile-info">
          <ul>
            <li><b>Party:</b> {this.state.member.party}</li>
            <li><b>State:</b> {this.state.member.homeState}</li>
            <li><b>Position:</b> {this.state.member.position}</li>
            <li><b>Date of Birth:</b> {this.state.member.DoB}</li>
            <li><b>Address:</b> {this.state.member.office}</li>
            <li><b>Phone Number:</b> {this.state.member.phone}</li>
            <li><b>Website:</b> {this.state.member.siteURL}</li>
            <li><b># Missed Votes / # Total Votes:</b> {this.state.member.missedVotes}/{this.state.member.totalVotes}</li>
            <li><b>Next Election Year:</b> {this.state.member.nextElection}</li>
            <li><b>Contact Form:</b> {this.state.member.contactForm}</li>
          </ul>
        </div>

        <div className="socialmedia">
        <ul>
          <li> <img src={fbIcon} alt="Facebook:" />  {this.state.member.facebook}</li>
          <li><img src={twitIcon} alt="Twitter:" />  {this.state.member.twitter}</li>
          <li><img src={YTicon} alt="Youtube:" />  {this.state.member.youtube}</li>
        </ul>
        </div>

        <div className="rating-display">
          Ripple Rating: {this.state.member.avgRating}
        </div>

        <div className="dropdown">
          <button className="dropbtn">Rate Here</button>
          <div className="dropdown-content">

        <div onChange={this.setRating.bind(this)}>
            <fieldset className="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Very Popular - 5 stars">&#9734;</label>
                <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Popular - 4 stars">&#9734;</label>
                <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Neutral - 3 stars">&#9734;</label>
                <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Unpopular - 2 stars">&#9734;</label>
                <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Very Unpopular - 1 star">&#9734;</label>
            </fieldset>
        </div>
            <button onClick={() => {
              this.sendRating();
              this.update('submission');
            }
          }>
              <div className="go-button">
                Go!
              </div>
            </button>
          </div>
        </div>

      </div>

    );

  }
}

function UrlExists(url)
{
   var http = new XMLHttpRequest();
   http.open('HEAD', url, false);
   http.send();
   if(http.status==404)
      return false;
   else return true;
}


export default Rate;

//FETCH FOR API
