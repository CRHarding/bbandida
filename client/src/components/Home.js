import React, { Component } from 'react';
import Header from './static/Header';
import Products from './products/Products';
import Services from './services/Services';
import { Dimmer, Loader } from 'semantic-ui-react';

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      cdataLoaded: false,
      data: null,
      contributors: null,
      gallery: [],
    };
  }

  componentDidMount() {
    Services.getProducts()
      .then(products => {
        this.setState({
          dataLoaded: true,
          data: products.data.products,
          gallery: products.data.images.resources,
        });
      })
      .catch(err => {
        console.log('error in getting all products --->', err);
      });

    Services.getContribs()
      .then(contribs => {
        this.setState({
          cdataLoaded: true,
          contributors: contribs.data.contributors,
        });
      })
      .catch(err => {
        console.log('error in getting contributors');
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>BB and IDA</h1>
        {this.state.dataLoaded && this.state.cdataLoaded ? (
          <Products
            products={this.state.data}
            contributors={this.state.contributors}
            images={this.state.gallery}
          />
        ) : (
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
        )}
      </div>
    );
  }
}
