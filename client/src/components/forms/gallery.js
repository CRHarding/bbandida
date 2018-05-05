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
      </div>
    );
  }

  render() {
    return (
      <div className="main">
        {this.state.dataLoaded ? (
          this.renderImages()
        ) : (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
      </div>
    );
  }
}

export default gallery;
