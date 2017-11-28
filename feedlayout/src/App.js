import React, { Component } from 'react';
import './App.css'
import NavBar from "./components/navbar";
import MainContent from "./components/maincontent";


class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <MainContent />
      </div>
     );
  }
}

export default App;
