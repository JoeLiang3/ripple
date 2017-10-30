import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = { currentState: 'Alaska' };
  }
  render() {
    return(
      <div id="page-content-wrapper">
        <div className="content-header text-center middle">
            <h1>
              Elected Officials
            </h1>
        </div>

        <div className="page-content text-center middle">
          <div className="state-container">
            <div className="state">AL</div>
            <div className="state">AK</div>
            <div className="state">AZ</div>
            <div className="state">AR</div>
            <div className="state">CA</div>
            <div className="state">CO</div>
            <div className="state">CT</div>
            <div className="state">DE</div>
            <div className="state">FL</div>
            <div className="state">GA</div>
            <div className="state">HI</div>
            <div className="state">ID</div>
            <div className="state">IL</div>
            <div className="state">IN</div>
            <div className="state">IA</div>
            <div className="state">KS</div>
            <div className="state">KY</div>
            <div className="state">LA</div>
            <div className="state">ME</div>
            <div className="state">MD</div>
            <div className="state">MA</div>
            <div className="state">MI</div>
            <div className="state">MN</div>
            <div className="state">MS</div>
            <div className="state">MO</div>
            <div className="state">MT</div>
            <div className="state">NE</div>
            <div className="state">NV</div>
            <div className="state">NH</div>
            <div className="state">NJ</div>
            <div className="state">NM</div>
            <div className="state">NY</div>
            <div className="state">NC</div>
            <div className="state">ND</div>
            <div className="state">OH</div>
            <div className="state">OK</div>
            <div className="state">OR</div>
            <div className="state">PA</div>
            <div className="state">RI</div>
            <div className="state">SC</div>
            <div className="state">SD</div>
            <div className="state">TN</div>
            <div className="state">TX</div>
            <div className="state">UT</div>
            <div className="state">VT</div>
            <div className="state">VA</div>
            <div className="state">WA</div>
            <div className="state">WV</div>
            <div className="state">WI</div>
            <div className="state">WY</div>

          </div>
        </div>

        <div className="page-content">
          <div className="state-officials">
            <div className="state-header text-center">
              <div className="state-name">{this.state.currentState}</div>
            </div>
            <div className="profile-view text-center">
              <div className="profile-image">
                <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
                <p>Name: Joe Liang</p>
                <p>Party: Democrat</p>
                <p>Phone Number: 111-111-1111</p>
              </div>

              <div className="profile-image">
                <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
                <p>Name: Joe Liang</p>
                <p>Party: Democrat</p>
                <p>Phone Number: 111-111-1111</p>
              </div>

              <div className="profile-image">
                <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
                <p>Name: Joe Liang</p>
                <p>Party: Democrat</p>
                <p>Phone Number: 111-111-1111</p>
              </div>

              <div className="profile-image">
                <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
                <p>Name: Joe Liang</p>
                <p>Party: Democrat</p>
                <p>Phone Number: 111-111-1111</p>
              </div>

              <div className="profile-image">
                <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
                <p>Name: Joe Liang</p>
                <p>Party: Democrat</p>
                <p>Phone Number: 111-111-1111</p>
              </div>

              <div className="profile-image">
                <img src={"https://image.ibb.co/jimGam/default_user_image.png"} width="100" height="100" alt="" />
                <p>Name: Joe Liang</p>
                <p>Party: Democrat</p>
                <p>Phone Number: 111-111-1111</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default View;

//FETCH FOR API
