import React, { Component } from 'react';
import axios from 'axios';

class uploadPicture extends Component {
  uploadWidget() {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'bbandida', upload_preset: 'q0zswxx7', tags: ['photos'] },
      function(error, resulet) {
        console.log(result);
      },
    );
  }

  render() {
    return (
      <div className="main">
        <h1>Galleria</h1>
        <div className="upload">
          <button
            onClick={this.uploadWidget.bind(this)}
            className="upload-button"
          >
            Add Image
          </button>
        </div>
      </div>
    );
  }
}
