import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Product from './Product';
import ProductSingle from './ProductSingle';
import smoothscroll from 'smoothscroll-polyfill';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      currentProduct: null,
      contributors: this.props.contributors,
      product: this.props.product,
      images: this.props.images,
    };

    this.showProducts = this.showProducts.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  onClick(product) {
    if (!this.state.click || this.state.currentProduct !== product) {
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    if (this.state.currentProduct !== product) {
      const productImages = this.getImages(product);
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      this.setState({
        images: productImages,
        currentProduct: product,
        click: true,
      });
    } else {
      this.setState({
        click: !this.state.click,
      });
    }
  }

  getImages(product) {
    const productImages = this.props.images.map(image => {
      if (image.tags.includes(product.tag)) {
        return image;
      }
    });
    return productImages.filter(image => {
      if (image !== null) {
        return image;
      }
    });
  }

  showProducts() {
    return this.props.products.map(product => {
      product.images = this.getImages(product);
      return (
        <Grid.Column>
          <Product
            product={product}
            key={product.id}
            handleClick={() => this.onClick(product)}
          />
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <div>
        <h4>Main Products</h4>
        {this.state.click ? (
              <ProductSingle
                product={this.state.currentProduct}
                contributors={this.state.contributors}
                images={this.state.images}
              />
        ) : (
          ''
        )}
        <Grid>
          <Grid.Row columns={3}>{this.showProducts()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}
