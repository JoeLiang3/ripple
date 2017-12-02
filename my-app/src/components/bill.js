import React, { Component } from 'react';
import '../bill.css';
class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { billDetails: '' };
  }

componentDidMount(){
   fetch('http://localhost:3000/bill/'+this.props.id, {
      mode: "cors",
      headers : {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   })
   .then((response) => response.json())
   .then(response => {
      this.setState({
         billDetails : response.billResult,
      });
      console.log(response.billResult);
      });
  };

 render() {

   return (
      <div className="content-header">
         <div>
            <h2><b>Name of Bill:</b> {this.state.billDetails.title}</h2>
            <p><b>Bill Number:</b> {this.state.billDetails.number}</p>
            <p><b>Bill Type:</b> {this.state.billDetails.type}</p>
            <p><b>Date Introduced:</b> {this.state.billDetails.introducedDate}</p>
            <p><b>Committees:</b> {this.state.billDetails.committees}</p>
            <br/>
            <p><b>Sponsor and ID:</b> {this.state.billDetails.sponsor}, {this.state.billDetails.sponsorId}</p>
            <p><b>Sponsor State:</b> {this.state.billDetails.sponsorState}</p>
            <p><b>Number of Co-sponsors:</b> {this.state.billDetails.coSponsors}</p>
            <br/>
            <h3><b>Last Major Action of the Bill was on</b> {this.state.billDetails.lastActionDate} </h3>
            <p>{this.state.billDetails.latestMajorAction}</p>
         </div>
      </div>
   );
}
}
export default Bill;

//FETCH FOR API
