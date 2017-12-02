import React, { Component } from 'react';
import '../bill.css';

class SearchFeed extends Component {
	constructor(props) {
		super(props);
		this.state = { billList: [] };
	}
	componentDidMount(){
		fetch('http://localhost:3001/billSearch/' + this.props.query, {
          mode: "cors",
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
		.then((response) => response.json())
		.then(response => {
          console.log(response.billQuery);
		  this.setState({
			 billList : response.billQuery,
		  });
        });
	};

	update(id) {
      this.props.updateBill(id);
		this.props.updateContentView('billPage');
  }
  render() {
	  var feedComponents = this.state.billList.map((bill, i) => {
      return <div className="bill-section" key={i}>
          <p><b>Title:</b> {bill.title}</p>
          <p><b>Still Active?:</b> {bill.active}</p>
          <p><b>Last Date Bill Was Acted On:</b> {bill.lastActionDate}</p>
          <p><b>Date Bill Was Introduced:</b> {bill.introducedDate}</p>
		  	<p><a onClick={() => this.update(bill.id)}><b>More Details</b></a></p>
      </div>;
    });
    return(
      <div className="content-header">
				{feedComponents}
      </div>
    );

  }

}

export default SearchFeed;

//FETCH FOR API
