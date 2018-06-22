import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import EditPost from '../admin/EditPost';
import ProductCarousel from './ProductCarousel';

export default class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  showEdit() {
    this.setState({ show: !this.state.show });
  }

  handleEditClick(product) {
    this.setState({
      product: product,
      show: !this.state.show,
    });
  }

  render() {
    let contributors = this.props.product.contributors.map(contributor => {
      return this.props.contributors.filter(
        contrib => contrib.id === contributor,
      );
    });

    console.log(this.props.product);
    
    const product = this.props.product;
    product.images.push(product.mainImages[0]);
    return (
      <Row>
        <Col xs="auto">
          <p>
            {product.title}
          </p>
          <p>
            {product.description}
          </p>
          {contributors.map(contributor => {
            return (
              <p>
                contributor: {contributor[0].name}
                <br />
                role: {contributor[0].role}
                <br />
                link: {contributor[0].link}
              </p>
            );
          })}
          <ProductCarousel images={product.images}/>
          {/* <Button color="primary" onClick={this.showEdit}>
            Edit
          </Button> */}
          {this.state.show ? (
            <EditPost
              product={product}
              contributors={this.props.contributors}
              onClick={this.handleEditClick}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    );
  }
}
