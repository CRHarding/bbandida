import React, { Component } from 'react';
import Gallery from './gallery';
import SidebarNav from './SidebarNav';
import AdminHeader from './AdminHeader';

class admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <div className="ui grid">
          <div className="twenty wide column">
            <Gallery />
          </div>
        </div>
      </div>
    );
  }
}

export default admin;
