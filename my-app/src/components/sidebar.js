import React, { Component } from 'react';
import '../sidebar.css'
class SideBar extends Component {

  update(view) {
    console.log(view);
    this.props.updateContentView(view);
  }

  render() {
    return(
      <div className="sidebar-wrapper" aria-expanded="true">
		    <div className="sidebar-inner">
		      <div className="sidebar-body">
		        <header className="page-header">

		        </header>
		        <nav className="navgroup navgroup-vertical">
		          <div className="navgroup-inner">
		            <div className="nav-heading">
		              <strong> &ensp; &ensp; Legislation</strong>
		            </div>
		            <ul className="nav" id="actions">
		              <li>
		                <a href="#" id="feed" onClick= {(event) => this.update("Feed")}>
		                  <i className="nav-icon fa fa-download"></i>
		                  <span className="nav-item-label"><b>Feed</b></span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="billSearch" onClick= {(event) => this.update("billSearch")}>
		                  <i className="nav-icon fa fa-code-fork"></i>
		                  <span className="nav-item-label"><b>Search Bills</b></span>
		                </a>
		              </li>
		            </ul>

		            <div className="nav-2heading">
		              <strong> &ensp; &ensp; Elected Officials</strong>
		            </div>
		            <ul className="nav" id="navigation">
		              <li>
		                  <a href="#" id="map" onClick= {(event) => this.update("officials")}>
		                    <i className="nav-icon fa fa-signal"></i>
		                    <span className="nav-item-label"><b>Officials Map</b></span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="memberSearch" onClick= {(event) => this.update("memberSearch")}>
		                  <i className="nav-icon fa fa-file-text-o"></i>
		                  <span className="nav-item-label"><b>Search Officials</b></span>
		                </a>
		              </li>
		            </ul>
		          </div>

              <div className="nav-3heading">
                <strong> &ensp; &ensp; Information</strong>
              </div>
              <ul className="nav" id="navigation">
                <li>
                    <a href="#" id="map" onClick= {(event) => this.update("aboutus")}>
                      <i className="nav-icon fa fa-signal"></i>
                      <span className="nav-item-label"><b>About Us</b></span>
                  </a>
                </li>
                <li>
                  <a href="#" id="memberSearch" onClick= {(event) => this.update("faq")}>
                    <i className="nav-icon fa fa-file-text-o"></i>
                    <span className="nav-item-label"><b>FAQ</b></span>
                  </a>
                </li>
              </ul>
		        </nav>
		      </div>
		      <div className="sidebar-footer">
						<p><font size="1.5"> &ensp; Made with &hearts; in Santa Cruz</font></p>
		         <a className="sidebar-toggle" id="toggle">
		           <i className="fa fa-angle-double-left"></i>
						</a>
		      </div>

		    </div>
		  </div>
    );

  }

}

export default SideBar;
