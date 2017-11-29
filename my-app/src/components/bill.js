import React, { Component } from 'react';
import '../bill.css';
class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = { billDetails: [] };
  }

componentDidMount(){
   fetch('http://localhost:3001/bill', {
      mode: "cors",
      headers : {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   })
   .then((response) => response.json())
   .then(response => {
      this.setState({
         billDetails : response.billResult,
      });
      console.log(response.billResult);
      });
  };

  render() {
    return(
        <div className="content-header">
        <h2>Name of Bill</h2>
        <p> Primary Subject of the Bill </p>
        <p> Sponsor, Sponsor ID, Sponsor State , Date Introduced  </p>
        <p> Committees</p>
        <br/>
        <p> Number of Co-sponsors</p>
        <p> Number of Co-sponsors by party (Republican, Democrat)</p>
        <br/>
        <h3> Last Major Action of the Bill + Date </h3>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>



        <h4> Short Summary of the Bill</h4>
          <p> onec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
          onec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
        onec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        </div>



    );

  }

}

export default Bill;

//FETCH FOR API
