import React, { Component } from 'react';
import '../sidebar.css'
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
		              <strong> &ensp; &ensp; Legislation</strong>
		            </div>
		            <ul className="nav" id="actions">
		              <li>
		                <a href="#" id="feed" onClick= {(event) => this.update("Feed")}>
		                  <i className="nav-icon fa fa-download"></i>
		                  <span className="nav-item-label">Feed</span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="billSearch" onClick= {(event) => this.update("billSearch")}>
		                  <i className="nav-icon fa fa-code-fork"></i>
		                  <span className="nav-item-label">Search Bills</span>
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
		                    <span className="nav-item-label">Officials Map</span>
		                </a>
		              </li>
		              <li>
		                <a href="#" id="memberSearch" onClick= {(event) => this.update("memberSearch")}>
		                  <i className="nav-icon fa fa-file-text-o"></i>
		                  <span className="nav-item-label">Search Officials</span>
		                </a>
		              </li>
		            </ul>
		          </div>
		        </nav>
		      </div>
		      <div className="sidebar-footer">
						<p><font size="1.5"> &ensp; &ensp; &ensp; Made with &hearts; in Santa Cruz</font></p>
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
