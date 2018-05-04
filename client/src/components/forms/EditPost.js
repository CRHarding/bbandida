import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Services from '../services/Services';

export default class EditPostForm extends Component {
	constructor(props) {
		super(props)
		this.state={
			title: '',
			description: '',
			fireRedirect: false
		}
		this.submitEdit = this.submitEdit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	submitEdit() {
		console.log('Submitting Edit')
		Services.editProduct()
	}

	handleChange(e) {
	    const name = e.target.name;
	    const value = e.target.value;
	    this.setState({
	      [name]: value,
	    });
	  }

	render() {
		console.log('EDIT PRODUCT', this.props.product)
		return (
		<div>
	        <br />	
	        <h4> EDIT FORM </h4>
	        <br />

	            <Form onSubmit={this.submitEdit}>
	              <Form.Input
	                fluid
	                label="Title"
	                name="title"
	                placeholder={this.props.product.description}
	                value={this.state.title}
	                onChange={this.handleChange}
	              />
	              <Form.TextArea
	                label="About"
	                name="description"
	                value={this.state.description}
	                placeholder="edit this desription"
	                onChange={this.handleChange}
	              />
	              <Form.Button>Submit</Form.Button>
	            </Form>
	   
      	</div>
		)
	}
}