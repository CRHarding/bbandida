import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

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

    const product = this.props.product;
    product.images.push(product.mainImages[0]);
    return (
      <div className="transitionTest">
      <Row>
        <Col xs="12" md="8">
          <ProductCarousel images={product.images} />
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
        <Col xs="12" md="4">
          <Card>
            <CardHeader tag="h3">{product.title}</CardHeader>
            <CardBody>
              <CardTitle tag="h5" className="cardText">{product.description}</CardTitle>
              {contributors.map((contributor, key) => {
                return (
                  <CardText key={key} tag="p" className="cardText">
                    Name: {contributor[0].name}<br/>
                    Role: {contributor[0].role}<br/>
                    Link: <a href={contributor[0].link} target="blank">{contributor[0].link}</a><br/>
                  </CardText>
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
    );
  }
}
