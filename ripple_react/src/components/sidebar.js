import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return(
      <div id="sidebar-wrapper">
          <nav id="spy">
              <ul className="sidebar-nav">
                  <li>
                    <a href="#anch1">
                        <span className="fa fa-anchor solo">Feed</span>
                    </a>
                  </li>
                  <li>
                      <a href="#anch1">
                          <span className="fa fa-anchor solo">Review</span>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
    );

  }

}

export default SideBar;
