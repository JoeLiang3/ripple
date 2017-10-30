import React, { Component } from 'react';
import Img from 'react-image';
import SideBar from './sidebar';
import View from './view';


class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return(
      <div id="wrapper">
            <SideBar />
            // Page content
            <View />
      </div>
    );

  }

  // onInputChange (term) {
  //   this.setState({term});
  //   this.props.OnSearchTermChange(term);
  // }

}

export default MainContent;
