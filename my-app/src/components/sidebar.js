import React, { Component } from 'react';
import '../App.css'
class SideBar extends Component {

  update(view) {
    console.log(this.props);
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
		              <strong> &ensp; &ensp; Feed</strong>
		            </div>
		            <ul className="nav" id="actions">
		              <li>
		                <a href="#" id="download">
		                  <i className="nav-icon fa fa-download"></i>
		                  <span className="nav-item-label">Trending</span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="fork">
		                  <i className="nav-icon fa fa-code-fork"></i>
		                  <span className="nav-item-label">New</span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="pull" onClick= {(event) => this.update("Timeline")}>
		                  <i className="nav-icon fa fa-cloud-upload"></i>
		                  <span className="nav-item-label">Explore</span>
		                </a>
		              </li>
		            </ul>

		            <div className="nav-2heading">
		              <strong> &ensp; &ensp; Review</strong>
		            </div>
		            <ul className="nav" id="navigation">
		              <li>
		                  <a href="#" id="overview" onClick= {(event) => this.update("officials")}>
		                    <i className="nav-icon fa fa-signal"></i>
		                    <span className="nav-item-label">Officials</span>
		                </a>
		              </li>
		              <li>
		                <a href="#">
		                  <i className="nav-icon fa fa-file-text-o"></i>
		                  <span className="nav-item-label">Rate</span>
		                </a>
		              </li>
		            </ul>
		            <div className="nav-heading">
		              <strong className="assistive">My Profile</strong>
		            </div>
		            <ul className="nav">
		              <li>
		                 <a href="#" id="settings">
		                   <i className="nav-icon fa fa-cog"></i>
		                   <span className="nav-item-2label">My Profile</span>
		                 </a>
		              </li>
		            </ul>
		          </div>
		        </nav>
		      </div>
		      <div className="sidebar-footer">
						<p><font size="1.5"> &ensp; &ensp; &ensp; &ensp; Made with &hearts; in Santa Cruz</font></p>
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
