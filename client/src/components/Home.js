import React, { Component } from 'react';
import Header from './static/Header';
import Products from './products/Products';
import { Dimmer, Loader } from 'semantic-ui-react';

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      contributors: this.props.contributors
    };
  }

  // componentDidMount() {
  //   Services.getProducts()
  //     .then(responseProducts => {
  //       console.log(responseProducts);
  //       const images = responseProducts.data.images;
  //       const mainImages = responseProducts.data.mainImages;
  //       let products = responseProducts.data.products;
  //       for (let i = 0; i < products.length; i++) {
  //         products[i].images = images[i];
  //         products[i].mainImages = mainImages[i];
  //       }

  //       console.log('HOME Products --->', products);
  //       this.setState({
  //         dataLoaded: true,
  //         data: products,
  //       });
  //     })
  //     .catch(err => {
  //       console.log('error in getting all products --->', err);
  //     });

  //   Services.getContribs()
  //     .then(contribs => {
  //       this.setState({
  //         cdataLoaded: true,
  //         contributors: contribs.data.contributors,
  //       });
  //     })
  //     .catch(err => {
  //       console.log('error in getting contributors');
  //     });
  // }

  render() {
    console.log('Home component', this.state)
    return (
      <div>
        <Header />
        <h1>BB and IDA</h1>
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
      </div>
    );
  }
}
