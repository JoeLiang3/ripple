import React, { Component } from 'react';

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
          <p><b>Title:</b> {bill.title}</p>
          <p><b>Still Active?:</b> {bill.active}</p>
          <p><b>Last Date Bill Was Acted On:</b> {bill.lastActionDate}</p>
          <p><b>Date Bill Was Introduced:</b> {bill.introducedDate}</p>
		  <p><b>Details...</b></p>
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
