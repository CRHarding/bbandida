import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      uploaded: false,
      url: null
    };
    this.uploadWidget = this.uploadWidget.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (nextProps.url !== prevState.url) {
      return nextProps.url;
    }
  }

  componentDidMount() {
    axios
      .get('https://res.cloudinary.com/bbandida/image/list/photos.json')
      .then(response => {
        console.log(response.data.resources);
        this.setState({ gallery: response.data.resources });
      })
      .catch(err => console.log(err));
  }

  uploadWidget() {
    console.log(this);
    let url;
    window.cloudinary.openUploadWidget(
      { cloud_name: 'bbandida', upload_preset: 'q0zswxx7', tags: ['photos'] },
      function(error, result) {
        console.log(result);
        url = result[0].public_id;
      },
    );
    this.setState({ uploaded: true, url: url });
    console.log(this.state);
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
        <div className="gallery">
          <CloudinaryContext cloudName="bbandida">
            {this.state.gallery.map(data => {
              return (
                <div className="responsive" key={data.public_id}>
                  <div className="img">
                    <a
                      target="_blank"
                      href={`https://res.cloudinary.com/bbandida/image/upload/${
                        data.public_id
                      }.jpg`}
                    >
                      <Image publicId={data.public_id}>
                        <Transformation
                          crop="scale"
                          width="300"
                          height="200"
                          dpr="auto"
                          responsive_placeholder="blank"
                        />
                      </Image>
                    </a>
                  </div>
                </div>
              );
            })}
            {this.state.loaded ? <Image publicId={this.state.url}></Image> : ''}
          </CloudinaryContext>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default gallery;
