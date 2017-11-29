import React, { Component } from 'react';
import { render } from 'react-dom'
import '../rate.css'


class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
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



  render() {
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
          <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="200" height="200" alt="" />
        </div>

        <div className="profile-info">
          <ul>
            <li>Party:</li>
            <li>Phone Number:</li>
            <li>Twitter:</li>
            <li>Facebook:</li>
            <li>Youtube:</li>
            <li>#Votes Had:</li>
            <li>#Votes Missed:</li>
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

  }
}



export default Rate;

//FETCH FOR API
