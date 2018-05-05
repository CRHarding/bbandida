import React, { Component } from 'react';

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

  getMainImages() {
    const mainImages = this.props.product.images.filter(image => {
      if (image.tags.includes('main')) {
        return image;
      }
    });
    return mainImages.filter(image => {
      if (image !== undefined) {
        return image;
      }
    });
  }

  render() {
    const image = this.getMainImages();
    return (
      <div>
        <img
          src={image[0].secure_url}
          onClick={() => this.handleClick(this.props.product)}
          alt="img"
          width={240}
          height={240}
        />
      </div>
    );
  }
}
