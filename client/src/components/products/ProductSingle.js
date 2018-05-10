import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
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
