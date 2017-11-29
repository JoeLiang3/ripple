import React, { Component } from 'react';
import Datamap from 'react-datamaps';

class Officials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: '',
      officialArray: []
    };
  }

  // Event Listening for datamap.
  addClickHandlers = (ref) => {
    if (ref && ref.map) {
      ref.map.svg.selectAll('.datamaps-subunit').on('click', (label) => {
        var state = label.properties.name;
        fetch('http://localhost:3001/members/' + state, {
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
          console.log(response.membersResult);
        });
      });
    }
  };


  render() {
    // Map state officialArray to an array of Profile components
    var officialComponents = this.state.officialArray.map(function(members, i) {
      return <div className="profile-image" key={i}>
        <img src={"https://theunitedstates.io/images/congress/original/"+members.photo+".jpg"} width="85" height="100" alt="" />
          <p>Name: {members.name}</p>
          <p>Position: {members.position}</p>
          <p>Phone Number: {members.phone}</p>
          <p>Party: {members.party}</p>
      </div>;
    });

    return(
      <div id="page-content-wrapper">
        <div className="page-content-officials text-center middle">
          <div className="state-container">
            <div label="label">
              <Datamap
                ref={this.addClickHandlers}
                scope="usa"
                geographyConfig={{
                  highlightBorderColor: '#bada55',
                  popupTemplate: (geography, data) =>
                    `<div class='hoverinfo'>${geography.properties.name}\nElectoral Votes: ${data.electoralVotes}`,
                  highlightBorderWidth: 3
                }}
                fills={{
                  'Republican': '#cc4731',
                  'Democrat': '#306596',
                  'Heavy Democrat': '#667faf',
                  'Light Democrat': '#a9c0de',
                  'Heavy Republican': '#ca5e5b',
                  'Light Republican': '#eaa9a8',
                  'defaultFill': '#eddc4e'
                }}
                data={{
                  AZ: {
                    name: "Alaska",
                    fillKey: 'Republican',
                    electoralVotes: 5
                  },
                  CO: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 5
                  },
                  DE: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  FL: {
                    fillKey: 'UNDECIDED',
                    electoralVotes: 29
                  },
                  GA: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  HI: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  ID: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  IL: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  IN: {
                    fillKey: 'Republican',
                    electoralVotes: 11
                  },
                  IA: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 11
                  },
                  KS: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  KY: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  LA: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  MD: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  ME: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  MA: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  MN: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  MI: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  MS: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  MO: {
                    fillKey: 'Republican',
                    electoralVotes: 13
                  },
                  MT: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  NC: {
                    fillKey: 'Light Republican',
                    electoralVotes: 32
                  },
                  NE: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  NV: {
                    fillKey: 'Heavy Democrat',
                    electoralVotes: 32
                  },
                  NH: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 32
                  },
                  NJ: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  NY: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  ND: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  NM: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  OH: {
                    fillKey: 'UNDECIDED',
                    electoralVotes: 32
                  },
                  OK: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  OR: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  PA: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  RI: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  SC: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  SD: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  TN: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  TX: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  UT: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  WI: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  VA: {
                    fillKey: 'Light Democrat',
                    electoralVotes: 32
                  },
                  VT: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  WA: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  WV: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  WY: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  CA: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  CT: {
                    fillKey: 'Democrat',
                    electoralVotes: 32
                  },
                  AK: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  AR: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  },
                  AL: {
                    fillKey: 'Republican',
                    electoralVotes: 32
                  }
                }}
              labels
              />
            </div>

          </div>
        </div>
        <div className="page-content-names">
          <div className="state-officials">
            <div className="state-header text-center">
              <div className="state-name">{this.state.currentState}</div>
            </div>
            <div className="profile-view text-center">
              <div>{officialComponents}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Officials;
