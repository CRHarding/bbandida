import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Services from '../services/Services';

export default class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      title: '',
      description: '',
    };
    this.submitEdit = this.submitEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitEdit() {
    Services.editProduct(this.state)
      .then(product => {
        this.props.onClick(product.data.product);
      })
      .catch(err => {
        console.log('error editing product', err);
      });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <br />
        <h4> EDIT FORM </h4>
        <br />
        <Form onSubmit={this.submitEdit}>
          <Form.Input type="hidden" name="id" value={this.props.product.id} />
          <Form.Input
            fluid
            label="Title"
            name="title"
            placeholder={this.props.product.title}
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="About"
            name="description"
            value={this.state.description}
            placeholder={this.props.product.description}
            onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}
