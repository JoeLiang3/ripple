import React, { Component } from 'react';
import './feed.css';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = { billList: [] };
	}	
	componentDidMount(){
		fetch('http://localhost:3001/feed', {
          mode: "cors",
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
		.then((response) => response.json())
		.then(response => {
          console.log(response.feedResult);
		  this.setState({
			 billList : response.feedResult,
		  });
        });
		
	};
		
  render() {
	  var feedComponents = this.state.billList.map(function(bill, i) {
      return <div key={i}>
          <p>Title: {bill.title}</p>
          <p>Active: {bill.active}</p>
          <p>lastActionDate: {bill.lastActionDate}</p>
          <p>introducedDate: {bill.introducedDate}</p>
      </div>;
    });
    return(
      <div className="content-header">
		{feedComponents}
      </div>
    );

  }

}

export default Feed;

//FETCH FOR API
