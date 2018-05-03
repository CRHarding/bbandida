import React, { Component } from 'react';
import Image from 'react-image-resizer';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    this.props.handleClick(product);
  }

  render() {
    return (
      <div>
        <img src={this.props.images[this.props.product.image_ids[0]].secure_url} onClick={() => this.handleClick(this.props.product)} alt="image" width={240} height={240} />
      </div>
    );
  }
}
