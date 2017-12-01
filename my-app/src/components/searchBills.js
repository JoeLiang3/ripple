import React, { Component } from 'react';
import '../searchbar.css';

class searchBills extends Component {
  constructor(props){
      super(props);
      this.state = {
        search: '',
      }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
onChange(e) {
    this.setState({[e.target.name]: e.target.value});
}

onSubmit(e) {

    e.preventDefault();
    console.log(e);
    console.log(this.state);

}
  render() {
    return(
      <form onSubmit ={this.onSubmit}>

      <div className="searching" >
        <label className="control-label"><b>Search:</b>  </label>
          <input
            onChange= {this.onChange}
            value={this.state.search}
            placeholder="Bernie Sanders, Healthcare, etc..."
            type="text"
            name="search"
            className="form-control"
          />
          </div>

          <div className="SearchButton">
      <button className="btn btn-primary btn-lg" >
        <b>Search </b>
      </button>
    </div>

      </form>

    );
  }
}

export default searchBills;
