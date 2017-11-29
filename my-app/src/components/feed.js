import React, { Component } from 'react';
import './feed.css';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = { billList: [] };
	}	
	componentDidMount(){
	fetch('http://localhost:3000/feed', {
		mode: "cors",
		headers : {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	.then( (response) => { return response.feedResult })
	.then( (feedResult) => { 
	//.then((response) => response.json())
	//.then(response => {
		this.setState({
			// Update state
			billList: feedResult,
		});
		console.log(feedResult);
	});
	};
		
  render() {
	  var feedComponents = this.state.billList.map(function(bill, i) {
      return <div className="profile-image" key={i}>
        <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
          <p>Name: {bill.name}</p>
          <p>Party: {bill.party}</p>
          <p>Phone Number: {bill.phone}</p>
          <p>Party: {bill.party}</p>
      </div>;
    });
    return(
      <div className="content-header">
        <div className="bill-title">
			title
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
