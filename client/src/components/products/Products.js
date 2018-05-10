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
    };

    this.showProducts = this.showProducts.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(product) {
    if (!this.state.click || this.state.currentProduct !== product) {
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    if (!this.state.currentProduct) {
      this.setState({
        currentProduct: product,
        click: !this.state.click,
      });
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else if (this.state.currentProduct !== product) {
      this.setState({
        currentProduct: product,
        click: true,
      });
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      this.setState({
        click: !this.state.click,
      });
    }
  }

  showProducts() {
    return this.props.products.map(product => {
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
