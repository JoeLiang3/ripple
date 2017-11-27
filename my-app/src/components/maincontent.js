import React, { Component } from 'react';
import Bill from './bill';
import Search from './searchbar';
import '../App.css'


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "Feed" };
  }
  
  render() {
    return(
      <div id="wrapper">
            <Search />
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
