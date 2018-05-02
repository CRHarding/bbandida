import React, { Component } from 'react';
import Gallery from './gallery';
import SidebarNav from './SidebarNav';
import Header from '../static/Header';

class admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="ui grid">
          <div className="two wide column">
            <SidebarNav />
          </div>
          <div className="twelve wide column">
            <Gallery />
          </div>
        </div>
      </div>
    );
  }
}

export default admin;
