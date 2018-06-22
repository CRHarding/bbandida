import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
<<<<<<< HEAD
=======
import EditPost from '../admin/EditPost';
>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8

export default class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      product: this.props.product,
      show: false,
=======
      show: false,
      product: this.props.product,
>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8
    };
    this.handleEditClick = this.handleEditClick.bind(this);
  }

<<<<<<< HEAD
=======
  showEdit() {
    this.setState({ show: !this.state.show });
  }

>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8
  handleEditClick(product) {
    this.setState({
      product: product,
      show: !this.state.show,
    });
  }

  render() {
    console.log('this is single ', this.props);

    let contributors = this.props.product.contributors.map(contributor => {
      return this.props.contributors.filter(
        contrib => contrib.id === contributor,
      );
    });
    const product = this.props.product;
    return (
      <div>
        <h1>single view</h1>
        <Grid centered columns={3}>
          <Grid.Row verticalAlign="middle">
<<<<<<< HEAD
            <Grid.Column className="description">

              <p>
                {product.title}
              </p>
              <p>
                {product.description}
              </p>
=======
            <Grid.Column>
              <p>{product.title}</p>
              <p>{product.description}</p>
>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8
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
            </Grid.Column>
            <Grid.Column>
              <Image src={product.mainimage} fluid />
                {product.images.map(image => {
                    return <Image src={image} fluid />
                })}
            </Grid.Column>
              <Grid.Column>
                
              </Grid.Column>
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
            </Grid.Column>
>>>>>>> e5d3462b07f2520300ef400fe768cabb4f992fa8
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
