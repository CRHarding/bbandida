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

  render() {
    return (
      <div>
        <img
          src={this.props.product.mainimage}
          onClick={() => this.handleClick(this.props.product)}
          alt="img"
          width={240}
          height={240}
        />
      </div>
    );
  }
}
