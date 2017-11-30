import React, { Component } from 'react';
import Bill from './bill';
import billSearch from './billSearch';
import '../App.css'


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "Feed" };
  }

  render() {
    return(
      <div id="wrapper">
            <billSearch />
            // Page content

            <Bill />
      </div>
    );

  }

  // onInputChange (term) {
  //   this.setState({term});
  //   this.props.OnSearchTermChange(term);
  // }
}

export default MainContent;
