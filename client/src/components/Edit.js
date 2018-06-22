import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import EditPost from './forms/EditPost';
import ProductEdit from './forms/ProductEdit';
import AdminHeader from './admin/AdminHeader';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data,
      currentProduct: null,
      show: false,
    };
    this.click = this.click.bind(this);
    this.disable = this.disable.bind(this);
  }

  disable(e) {
    e.stopPropagation();
  }

  show() {
    return this.state.products.map(product => {
      return (
        <Grid.Column>
          <ProductEdit product={product} />
          <Button primary onClick={() => this.click(product)}>
            edit
          </Button>
          <br />
          <br />
        </Grid.Column>
      );
    });
  }

  click(product) {
    this.setState({
      currentProduct: product,
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <h1> edit page </h1>
        {this.state.show ? (
          <EditPost
            product={this.state.currentProduct}
            contributors={this.props.contributors}
          />
        ) : (
          ''
        )}
        <Grid>
          <Grid.Row columns={3}>{this.show()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}
