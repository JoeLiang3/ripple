import React, { Component } from 'react';
import { render } from 'react-dom'
import '../faq.css';

class Faq extends Component {


  render() {
    console.log('hi');
    return(
      <div>
        <div className="about-us-Header">
          <h1> FAQ </h1>
        </div>

        <div className="bug-fix">
          If you find any bugs on our site please check with our known bugs repo document. If the found bug is not listed please contact us, we’re always ready to make improvements. We’d greatly appreciate it!
        </div>

      <div className="overview">
      <ul>
        <li><b>Overview:</b></li>
        <li><b>Q.</b> What is Ripple?</li>
        <li><b>A.</b> Ripple is a platform built to connect everyday people with their elected officials.</li>
        <li><b>Q.</b> How can Ripple help me?</li>
        <li><b>A.</b> Ripple can help you become a more politically informed citizen, by providing you with access to information regarding legislation and politicians.</li>
        <li><b>Q.</b> How do I go back a page (the back button is not working)?</li>
        <li><b>A.</b> No you’re not going crazy, we have chosen to remove the ability to go back since, here at Ripple, we only believe in going forward.</li>
      </ul>
      </div>


      <div className="legislation">
      <ul>
        <li><b>Legislation:</b></li>
        <li><b>Q.</b> How do I use the Feed?</li>
        <li><b>A.</b> To use the Feed feature all you need to do is scroll and view the different pieces of legislation. When you find a bill that you would like to know more about, just click on “More Details”.</li>
        <li><b>Q.</b> How do I search bills?</li>
        <li><b>A.</b> To search bills, you just need to type into the input field of the search bar and press enter.</li>
      </ul>
      </div>

      <div className="officials">
      <ul>
        <li><b>Elected Officials:</b></li>
        <li><b>Q.</b> How do I use the Officials Map?</li>
        <li><b>A.</b> To use the Officials Map, just click on a state of your choice to view a list of elected officials from that state. You will be able to then navigate to the individual elected officials profile and rate them.</li>
        <li><b>Q.</b> How do I rate my Elected Official?</li>
        <li><b>A.</b> To rate your elected officials, just choose a number of stars and click.</li>
        <li><b>Q.</b> How do I search for officials</li>
        <li><b>A.</b> To search for officials, you just need to type into the input field of the search bar and press enter.</li>
      </ul>
      </div>

      </div>







    );
  }
}

export default Faq;
