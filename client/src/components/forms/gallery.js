import React, { Component } from 'react';
import Services from '../services/Services';
import Image from 'react-image-resizer';
import { Dimmer, Loader } from 'semantic-ui-react';

class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      dataLoaded: false,
      url: '',
    };
    this.renderSingleAdded = this.renderSingleAdded.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    Services.getProducts()
      .then(products => {
        const filterProduct = products.data.images.resources.filter(product => {
          if (product.tags.length !== 0) {
            return product;
          }
        });

        this.setState({
          dataLoaded: true,
          data: products.data.products,
          gallery: filterProduct,
        });
      })
      .catch(err => {
        console.log('error in getting all products');
      });
  }

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget(
      { cloud_name: 'bbandida', upload_preset: 'q0zswxx7', tags: ['photos'] },
      function(error, result) {
        _this.setState({ gallery: _this.state.gallery.concat(result), url: result.secure_url });
      },
    );
  }

  renderSingleAdded() {
    return <Image publicId={this.state.url} />;
  }

  renderImages() {
    return (
      <div className="ui centered three column grid">
        {this.state.gallery.map(data => {
          return (
            <div className="column" key={data.public_id}>
              <a
                target="_blank"
                href={`https://res.cloudinary.com/bbandida/image/upload/${
                  data.public_id
                }.jpg`}
              >
                <Image src={data.secure_url} width={240} height={240} />
              </a>
            </div>
          );
        })}
        {this.state.dataLoaded ? this.renderSingleAdded() : ''}
      </div>
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
          {this.state.dataLoaded ? (
            this.renderImages()
          ) : (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
        </div>
      </div>
    );
  }
}

export default gallery;
