import React, { Component } from 'react';
import Gallery from './gallery';
import SidebarNav from './SidebarNav';

class admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SidebarNav />
        <Gallery />
      </div>
    );
  }
}

export default admin;
