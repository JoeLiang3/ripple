import React, { Component } from 'react';
import SideBar from './sidebar';
import View from './view';
import Search from './searchbar';



class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return(
      <div id="wrapper">
            <Search />
            <SideBar />
            // Page content
            <View />
      </div>
    );
  }
}

export default MainContent;
