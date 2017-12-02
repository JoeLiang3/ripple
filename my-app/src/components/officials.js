import React, { Component } from 'react';
import Datamap from 'react-datamaps';
import Rate from './rate';
import '../map.css';
import noPic from '../missingPic.png';
var imageExists = require('image-exists');

class Officials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: '',
      officialArray: [],
      page: 'list',
      member: ''
    };
  }

  update(id) {
     this.props.updateMember(id);
     this.props.updateContentView('Individual');
 }
  // Event Listening for datamap.


  addClickHandlers = (ref) => {
    if (ref && ref.map) {
      ref.map.svg.selectAll('.datamaps-subunit').on('click', (label) => {
        var state = label.properties.name;
        fetch('http://localhost:3000/map/' + state, {
          mode: "cors",
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((response) => response.json())
        .then(response => {
          this.setState({
            // Update state
            officialArray: response.membersResult,
            currentState: state,
          });
          // console.log(response.membersResult);
          console.log(this.state.officialArray);
          window.scrollTo(0, 600)

        });
      });
    }
  };

  render() {

   var myArray = this.state.officialArray.map((members, i) => {
      var profPic = "https://theunitedstates.io/images/congress/original/"+members.photo+".jpg";
      if(!UrlExists(profPic))
         profPic = noPic;
      return (
         <div className="state-profile-image" key={i}>
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
      <div id="page-content-wrapper">
        <div className="page-content-officials text-center state-middle">
          <div className="state-container">
            <div label="label">
              <Datamap
                ref={this.addClickHandlers}
                scope="usa"
                fills={{
                  'Republican': '#cc4731',
                  'Democrat': '#306596',
                  'Heavy Democrat': '#667faf',
                  'Light Democrat': '#a9c0de',
                  'Heavy Republican': '#ca5e5b',
                  'Light Republican': '#eaa9a8',
                  'swing': '#8E4ACC'
               }}
                geographyConfig={{
                  highlightBorderColor: '#bada55',
                  popupTemplate: (geography, data) =>
                    `<div class='hoverinfo'>${geography.properties.name} (${data.electoralVotes} Electoral Votes)`,
                  highlightBorderWidth: 3
                }}
                data={{
                  AZ: {
                    name: "Alaska",
                    fillKey: 'Republican',
                    electoralVotes: 3
                  },
                  CO: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 9
                  },
                  DE: {
                    fillKey: 'Democrat',
                    electoralVotes: 3
                  },
                  FL: {
                    fillKey: 'swing',
                    electoralVotes: 27
                  },
                  GA: {
                    fillKey: 'Republican',
                    electoralVotes: 15
                  },
                  HI: {
                    fillKey: 'Democrat',
                    electoralVotes: 4
                  },
                  ID: {
                    fillKey: 'Republican',
                    electoralVotes: 4
                  },
                  IL: {
                    fillKey: 'Democrat',
                    electoralVotes: 21
                  },
                  IN: {
                    fillKey: 'Republican',
                    electoralVotes: 11
                  },
                  IA: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 7
                  },
                  KS: {
                    fillKey: 'Republican',
                    electoralVotes: 8
                  },
                  KY: {
                    fillKey: 'Republican',
                    electoralVotes: 8
                  },
                  LA: {
                    fillKey: 'Republican',
                    electoralVotes: 9
                  },
                  MD: {
                    fillKey: 'Democrat',
                    electoralVotes: 10
                  },
                  ME: {
                    fillKey: 'Democrat',
                    electoralVotes: 4
                  },
                  MA: {
                    fillKey: 'Democrat',
                    electoralVotes: 12
                  },
                  MN: {
                    fillKey: 'Democrat',
                    electoralVotes: 10
                  },
                  MI: {
                    fillKey: 'Democrat',
                    electoralVotes: 17
                  },
                  MS: {
                    fillKey: 'Republican',
                    electoralVotes: 6
                  },
                  MO: {
                    fillKey: 'Republican',
                    electoralVotes: 11
                  },
                  MT: {
                    fillKey: 'Republican',
                    electoralVotes: 3
                  },
                  NC: {
                    fillKey: 'Light Republican',
                    electoralVotes: 15
                  },
                  NE: {
                    fillKey: 'Republican',
                    electoralVotes: 5
                  },
                  NV: {
                    fillKey: 'Heavy Democrat',
                    electoralVotes: 5
                  },
                  NH: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 4
                  },
                  NJ: {
                    fillKey: 'Democrat',
                    electoralVotes: 15
                  },
                  NY: {
                    fillKey: 'Democrat',
                    electoralVotes: 31
                  },
                  ND: {
                    fillKey: 'Republican',
                    electoralVotes: 3
                  },
                  NM: {
                    fillKey: 'Democrat',
                    electoralVotes: 5
                  },
                  OH: {
                    fillKey: 'swing',
                    electoralVotes: 20
                  },
                  OK: {
                    fillKey: 'Republican',
                    electoralVotes: 7
                  },
                  OR: {
                    fillKey: 'Democrat',
                    electoralVotes: 7
                  },
                  PA: {
                    fillKey: 'Democrat',
                    electoralVotes: 21
                  },
                  RI: {
                    fillKey: 'Democrat',
                    electoralVotes: 4
                  },
                  SC: {
                    fillKey: 'Republican',
                    electoralVotes: 8
                  },
                  SD: {
                    fillKey: 'Republican',
                    electoralVotes: 3
                  },
                  TN: {
                    fillKey: 'Republican',
                    electoralVotes: 11
                  },
                  TX: {
                    fillKey: 'Republican',
                    electoralVotes: 34
                  },
                  UT: {
                    fillKey: 'Republican',
                    electoralVotes: 5
                  },
                  WI: {
                    fillKey: 'Democrat',
                    electoralVotes: 10
                  },
                  VA: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 13
                  },
                  VT: {
                    fillKey: 'Democrat',
                    electoralVotes: 3
                  },
                  WA: {
                    fillKey: 'Democrat',
                    electoralVotes: 11
                  },
                  WV: {
                    fillKey: 'Republican',
                    electoralVotes: 5
                  },
                  WY: {
                    fillKey: 'Republican',
                    electoralVotes: 3
                  },
                  CA: {
                    fillKey: 'Democrat',
                    electoralVotes: 55
                  },
                  CT: {
                    fillKey: 'Democrat',
                    electoralVotes: 7
                  },
                  AK: {
                    fillKey: 'Republican',
                    electoralVotes: 3
                  },
                  AR: {
                    fillKey: 'Republican',
                    electoralVotes: 10
                  },
                  AL: {
                    fillKey: 'Republican',
                    electoralVotes: 9
                  }
                }}
              labels
              />
            </div>

          </div>
        </div>
        <div className="state-page-content-names">
          <div className="state-officials">
            <div className="state-header text-center">
              <div className="state-name">{this.state.currentState}</div>
            </div>
            <div className="state-profile-view text-center">
              <div>
              {myArray}
              </div>
            </div>
          </div>
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

export default Officials;
