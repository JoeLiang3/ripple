import React, { Component } from 'react';
import '../searchbar.css';
class Search extends Component {

  render() {
    return(
      <div class="wrap">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="Bernie Sanders, Healthcare, etc..." />
            <input type="image" className="searchButton" src="search_icon.png" alt="Search" />
          <button>
              <i class="fa fa-search"></i>
           </button>
         </div>
      </div>

    );

  }

}

export default Search;

//FETCH FOR API
