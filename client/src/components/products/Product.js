import React, { Component } from 'react';
import ProductSingle from './ProductSingle';
import Image from 'react-image-resizer';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      click: !this.state.click,
    });
  }

  render() {
    return (
      <div>
        {this.state.click ? (
          <ProductSingle
            product={this.props.product}
            contributors={this.props.contributors}
            images={this.props.images}
          />
        ) : (
          ''
        )}
         <img src={this.props.images[this.props.product.image_ids[0]].secure_url} onClick={this.onClick} alt="image" width={240} height={240} />
      </div>
    );
  }
}