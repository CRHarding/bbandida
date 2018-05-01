import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
    };
    this.renderSingleAdded = this.renderSingleAdded.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://res.cloudinary.com/bbandida/image/list/photos.json')
      .then(response => {
        this.setState({
          gallery: response.data.resources,
        });
      })
      .catch(err => console.log(err));
  }

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget(
      { cloud_name: 'bbandida', upload_preset: 'q0zswxx7', tags: ['photos'] },
      function(error, result) {
        _this.setState({ gallery: _this.state.gallery.concat(result) });
      },
    );
  }

  renderSingleAdded() {
    console.log(this.state.url);
    return <Image publicId={this.state.url} />;
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
            {this.state.loaded ? this.renderSingleAdded() : ''}
          </CloudinaryContext>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default gallery;
