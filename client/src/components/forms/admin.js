import React, { Component } from 'react';
import Gallery from './gallery';
import AdminHeader from './AdminHeader';

export default class Admin extends Component {
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