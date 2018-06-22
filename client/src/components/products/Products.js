import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Product from './Product';
import ProductSingle from './ProductSingle';
import smoothscroll from 'smoothscroll-polyfill';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      currentProduct: null,
    };

    this.showProducts = this.showProducts.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(product) {
    if (!this.state.currentProduct) {
      this.setState({
        currentProduct: product,
        click: true,
      });
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    if (this.state.currentProduct !== product) {
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
      smoothscroll.polyfill();
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  showProducts() {
    return this.props.products.map(product => {
      return (
        <Product
          product={product}
          key={product.id}
          handleClick={() => this.onClick(product)}
        />
      );
    });
  }

  render() {
    return (
      <Container>
        {this.state.click ? (
          <ProductSingle
            product={this.state.currentProduct}
            contributors={this.props.contributors}
          />
        ) : (
          ''
        )}
        <Row>
          {this.showProducts()}
        </Row>
      </Container>
    );
  }
}
