import React, { Component } from 'react';
import Product from './Product';
import ProductSingle from './ProductSingle';

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
  }

  onClick(product) {
    this.setState({
      click: !this.state.click,
      currentProduct: product,
    });
  }

  showProducts() {
    return this.props.products.map(product => {
      return (
        <div className="ui centered three column grid">
          <Product
            product={product}
            key={product.id}
            images={this.props.images}
            handleClick = {() => this.onClick(product)}
          />
        </div>
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
        {this.showProducts()}
      </div>
    );
  }
}
