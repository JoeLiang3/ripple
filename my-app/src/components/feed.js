import React, { Component } from 'react';
import './feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = { currentState: 'Alaska' };
  }
  render() {
    return(

      <div className="content-header">
        <div className="bill-title">
          Title
        </div>
        <div className="bill-title">
          Title
        </div>
        <div className="bill-title">
          Title
        </div>
        <div className="bill-title">
          Title
        </div>
      </div>
    );

  }

}

export default Feed;

//FETCH FOR API
