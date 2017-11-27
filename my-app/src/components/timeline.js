import React, { Component } from 'react';
import '../timeline.css';
class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = { billTime: 'Donec id elit non mi porta gravida at eget='};
  }

  render() {
    return(
      <body>
    <div class="container">
      <h3>History/Current direction of the Bill</h3>
       <div class="left-content">
          <p onClick={(event) => this.onClick('Date Introduced')}>Introduced</p>
          <p onClick={(event) => this.onClick(' Date Passed House')}>Passed House</p>
          <p onClick={(event) => this.onClick(' Date Passed Senate')}>Passed Senate</p>
          <p onClick={(event) => this.onClick(' Date To President')}>To President</p>
          <p onClick={(event) => this.onClick(' Date Became Law')}>Became Law</p>
          <p onClick={(event) => this.onClick(' tortor mauris condimentu')}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentu</p>
          <p onClick={(event) => this.onClick(' tortor mauris condimentu')}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentu</p>
          <p onClick={(event) => this.onClick(' tortor mauris condimentu')}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentu</p>

       </div>
       <div class="right-content">
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod</p>
       </div>
    </div>

    <div class="clickcontainer">
      <h2>Bill Progress Tracker</h2>
        <p>{this.state.billTime}</p>
    </div>

    </body>
  );}

  onClick(text) {
    this.setState({
      billTime: text,
    });
  };

}

export default Timeline;
