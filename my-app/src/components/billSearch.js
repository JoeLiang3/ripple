import React, { Component } from 'react';
import '../searchbar.css';

class BillSearch extends Component {
  constructor(props){
      super(props);
      this.state = {
        searcher: '',
        billList: []
     };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
onChange(e) {
    this.setState({[e.target.name]: e.target.value});
}

onSubmit(e) {

    e.preventDefault();
    this.props.updateQuery(this.state.searcher);
    this.props.updateContentView('searchFeed');

  }
  render() {
    return(
      <form onSubmit ={this.onSubmit}>
      <div className="searching" >
        <label className="control-label"><b>Find a Bill:</b>  </label>
          <input
            onChange= {this.onChange}
            value={this.state.search}
            placeholder="Type keywords for any bills then press enter..."
            type="text"
            name="searcher"
            className="form-control"
          />
      </div>
      </form>
   );
  }
}

export default BillSearch;
