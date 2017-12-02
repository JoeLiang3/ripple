import React, { Component } from 'react';
import Rate from './rate';
import '../memberSearch.css';
import noPic from '../missingPic.png';
var imageExists = require('image-exists');

class SearchFeed extends Component {
	constructor(props) {
		super(props);
		this.state = { officialArray: [] };
	}
	componentDidMount(){
		fetch('http://localhost:3000/memberSearch/' + this.props.query, {
          mode: "cors",
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
		.then((response) => response.json())
		.then(response => {
          console.log(response.memberQuery);
		  this.setState({
			 officialArray : response.memberQuery,
		  });
        });
	};

	update(id) {
		this.props.updateMember(id);
      this.props.updateContentView('Individual');
  }
  render() {
	  var myArray = this.state.officialArray.map((members, i) => {
		  var profPic = "https://theunitedstates.io/images/congress/original/"+members.photo+".jpg";
		  if(!UrlExists(profPic))
			  profPic = noPic;
		  return (
			  <div className="member-profile-image" key={i}>
				 <img src={profPic} width="85" height="100" alt="" />
				  <p></p>
					<p><b>Name:</b> {members.name}</p>
					<p><b>Position:</b> {members.position}</p>
					<p><b>Phone Number:</b> {members.phone}</p>
					<p><b>Party:</b> {members.party}</p>
					<button type="button" class="btn btn-primary" onClick={() => this.update(members.photo)}>More Details</button>
			  </div>
		  );
	  });
    return(
		 <div className="member-profile-view text-center">
 		  <div>
 		  {myArray}
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

export default SearchFeed;

//FETCH FOR API
