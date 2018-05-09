import React, { Component } from 'react';
import { Form, Grid, Segment, Input } from 'semantic-ui-react';

class PriceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      priceLoaded: false,
    };

    this.updatePrice = this.updatePrice.bind(this);
  }

  updatePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  render() {
    console.log(this.state.price);
    return (
      <Grid.Column stretched width={12}>
        <Segment>
          <Form>
            <Input
              type="number"
              defaultValue="9.99"
              onChange={this.updatePrice}
            />
          </Form>
          <Form.Button onClick={() => this.props.onClick(this.state.price)}>Edit Price</Form.Button>
        </Segment>
      </Grid.Column>
    );
  }
}
export default PriceForm;
