import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import EditPost from '../forms/EditPost';

export default class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showEdit = this.showEdit.bind(this);
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  showEdit() {
    this.setState({ show: !this.state.show });
  }

  render() {
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
              <Button primary onClick={this.showEdit}>
                Edit
              </Button>
              {this.state.show ? (
                <EditPost
                  product={product}
                  contributor={this.props.contributors}
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
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
