import React, { Component } from 'react';
import Header from './static/Header';
import Products from './products/Products';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Container } from 'reactstrap';

import { CloudinaryContext } from 'cloudinary-react';

const home = props => {
  return (
    <CloudinaryContext cloudName="bbandida">
      <Header />
      <Container>
        <h1 id="CompanyName">BB and IDA</h1>
        {props.data ? (
          <Products
            products={props.data}
            contributors={props.contributors}
          />
        ) : (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
      </Container>
    </CloudinaryContext>
  );
};


export default home;
