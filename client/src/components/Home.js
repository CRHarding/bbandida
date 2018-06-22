import React, { Component } from 'react';
import Header from './static/Header';
import Products from './products/Products';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Container } from 'reactstrap';
import { CloudinaryContext } from 'cloudinary-react';
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      contributors: this.props.contributors,
    };
  }

  render() {
    return (
      <CloudinaryContext cloudName="bbandida">
        <Header />
        <h1>BB and IDA</h1>
        <Container>
          {this.state.data ? (
            <Products
              products={this.state.data}
              contributors={this.state.contributors}
            />
          ) : (
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer>
          )}
        </Container>
      </CloudinaryContext>
    );
  }
}
