import React, { Component } from 'react';
import Services from '../services/Services';
import { Dimmer, Loader, Grid, Image } from 'semantic-ui-react';

class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      products: null,
      images: null,
      url: '',
    };
    this.renderImages = this.renderImages.bind(this);
  }

  componentDidMount() {
    Services.getProducts()
      .then(responseProducts => {
        const images = responseProducts.data.images;
        let products = responseProducts.data.products;
        for (let i = 0; i < products.length; i++) {
          products[i].images = images[i];
        }

        const flattenedImages = images.reduce(
          (acc, current) => acc.concat(current),
          [],
        );

        this.setState({
          dataLoaded: true,
          products: products,
          images: flattenedImages,
        });
      })
      .catch(err => {
        console.log('error in getting all products');
      });
  }

  renderImages() {
    const images = this.state.images;
    return (
      <Grid columns={12}>
        <Grid.Row >
          <Image.Group size="medium">
            {images.map((image, key) => {
              return <Image key={key} src={image} />;
            })}
          </Image.Group>
        </Grid.Row>
      </Grid>
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
