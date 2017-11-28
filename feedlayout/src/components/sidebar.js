import React, { Component } from 'react';

class SideBar extends Component {
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
		              <strong>Feed</strong>
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
											  &nbsp;&nbsp;
		                  <span className="nav-item-label">New</span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="pull">
		                  <i className="nav-icon fa fa-cloud-upload"></i>
		                  <span className="nav-item-label">Explore</span>
		                </a>
		              </li>
		            </ul>

		            <div className="nav-heading">
		              <strong>Review</strong>
		            </div>
		            <ul className="nav" id="navigation">
		              <li>
		                <a href="#" id="overview">
		                  <i className="nav-icon fa fa-signal"></i>
		                  <span className="nav-item-label">Contact</span>
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
		                   <span className="nav-item-label">My Profile</span>
		                 </a>
		              </li>
		            </ul>
		          </div>
		        </nav>
		      </div>
		      <div className="sidebar-footer">
						<p><font size="1.5">Made with &hearts; in Santa Cruz</font></p>
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
