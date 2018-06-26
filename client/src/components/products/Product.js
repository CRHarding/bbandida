import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { Col } from 'reactstrap';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      product: props.product,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    this.props.handleClick(product);
  }

  render() {
    if (this.state.product.mainImages) {
      return (
        <Col xs="12" md="6">
          <Image
            responsive
            className="ResponsiveMainImages"
            publicId={this.state.product.mainImages[0]}
            onClick={() => this.handleClick(this.state.product)}
          />
        </Col>
      );
    } else {
      return <div></div>;
    }
  }
}
