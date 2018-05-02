import React, { Component } from 'react';
import Product from './Product';
import Image from 'react-image-resizer';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.showProducts = this.showProducts.bind(this);
  }

  showProducts() {
    return this.props.products.map(product => {
      console.log('individ ', product);
      return (
        <div className="ui centered three column grid">
          {this.props.images.map(data => {
            return (
              <div className="column" key={data.public_id}>
                <a
                  target="_blank"
                  href={`https://res.cloudinary.com/bbandida/image/upload/${
                    data.public_id
                  }.jpg`}
                >
                  <Image src={data.secure_url} width={240} height={240} />
                </a>
              </div>
            );
          })}
          <Product
            product={product}
            key={product.id}
            contributors={this.props.contributors}
            images={this.props.images}
          />
        </div>
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
