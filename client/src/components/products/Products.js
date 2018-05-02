import React, { Component } from 'react';
import Product from './Product';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.showProducts = this.showProducts.bind(this);
  }

  showProducts() {
    return this.props.products.map(product => {
      console.log('individ ', product);
      return (
        <Product
          product={product}
          key={product.id}
          contributors={this.props.contributors}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h4>Main Products</h4>
        {this.showProducts()}
      </div>
    );
  }
}
