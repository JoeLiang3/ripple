import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = { currentState: 'Alaska' };
  }
  render() {
    return(
      <div class="poptag">
        <div class="header">
          <u>Popular Tags</u>


          <ul>
          <button type="button" class="btn">#Technology</button>
          <button type="button" class="btn">#Agriculture</button>
          <button type="button" class="btn">#HealthandSafety</button>
          <button type="button" class="btn">#Marijuana</button>
          <button type="button" class="btn">#TrumpTwitter</button>
          <button type="button" class="btn">#Business</button>
          <button type="button" class="btn">#Military</button>
          <button type="button" class="btn">#Education</button>
          <button type="button" class="btn">#Welfare</button>
          </ul>



        <div class = "trending">
          <div class="header">
            Trending
                <a href="https://imgbb.com/"><img src="https://image.ibb.co/gjftYG/trending_icon.png" width="30" height="30" alt="trending icon" border="0" /></a>
          </div>
        </div>


      <div class="new">
        <div class="header">
          New
        </div>
      </div>




        </div>
      </div>







    );

  }

}

export default View;

//FETCH FOR API
