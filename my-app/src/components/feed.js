import React, { Component } from 'react';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = { currentState: 'Alaska' };
  }
  render() {
    return(
      <div className = "content-header">
        <div className="poptag">
          <div className="header">
            <u>Popular Tags</u>

            <ul>
            <button type="button" className="btn">#Technology</button>
            <button type="button" className="btn">#Agriculture</button>
            <button type="button" className="btn">#HealthandSafety</button>
            <button type="button" className="btn">#Marijuana</button>
            <button type="button" className="btn">#TrumpTwitter</button>
            <button type="button" className="btn">#Business</button>
            <button type="button" className="btn">#Military</button>
            <button type="button" className="btn">#Education</button>
            <button type="button" className="btn">#Welfare</button>
            </ul>
          <div className = "trending">
            <div className ="header">
              Trending
                  <a href="https://imgbb.com/"><img src="https://image.ibb.co/gjftYG/trending_icon.png" width="30" height="30" alt="trending icon" border="0" /></a>
            </div>
          </div>
        <div className = "new">
          <div className = "header">
            New
          </div>
        </div>
          </div>
        </div>
    </div>
    );

  }

}

export default Feed;

//FETCH FOR API
