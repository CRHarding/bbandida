import React, { Component } from 'react';
<<<<<<< HEAD
import { Grid, Image } from 'semantic-ui-react';
=======
import { Grid, Image, Button } from 'semantic-ui-react';
import EditPost from '../admin/EditPost';
>>>>>>> 33ad2952738207490e873b4522456823f474e784

export default class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      product: this.props.product,
    };
=======
      show: false,
      product: null,
    };
    this.showEdit = this.showEdit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  showEdit() {
    this.setState({ show: !this.state.show });
>>>>>>> 33ad2952738207490e873b4522456823f474e784
  }

  handleEditClick(product) {
    this.setState({
      product: product,
      show: !this.state.show,
    });
  }

  render() {
    console.log('this is single ', this.props)

    let contributors = this.props.product.contributors.map(contributor => {
      return this.props.contributors.filter(
        contrib => contrib.id === contributor,
      );
    });
    const product = this.props.product;
    return (
      <div>
        <h1>single view</h1>
        <Grid centered columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
<<<<<<< HEAD
              <p>
                {product.title}
              </p>
              <p>
                {product.description}
              </p>
=======
              <p>{product.title}</p>
              <p>{product.description}</p>

>>>>>>> 33ad2952738207490e873b4522456823f474e784
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
<<<<<<< HEAD
=======
              <Button primary onClick={this.showEdit}>
                Edit
              </Button>
              {this.state.show ? (
                <EditPost
                  product={product}
                  contributor={this.props.contributors}
                  onClick={this.handleEditClick}
                />
              ) : (
                ''
              )}
            </Grid.Column>
            <Grid.Column>
              <Image src={product.mainimage} />
              {product.images.map(image => {
                return <Image src={image} />;
              })}
>>>>>>> 33ad2952738207490e873b4522456823f474e784
            </Grid.Column>
              <Grid.Column>
                <Image src={product.mainimage} />
                {product.images.map(image => {
                    return <Image src={image} />
                })}
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
