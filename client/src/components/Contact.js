import React, { Component } from 'react';
import Header from './static/Header';
import { Form, Container } from 'semantic-ui-react';

export default class Contact extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		})
	}

	render() {
		return(
			<div>
			  <Header />
			  <br />
			  <br />
			  <Container>
				  <h1>Contact Page</h1>
				  <Form>
				  	<Form.Input
				  	  label="Name"
				  	  name="Name"
				  	  onChange={this.handleChange} />
				  	<Form.Input
				  	  label="Email"
				  	  name="email"
				  	  onChange={this.handleChange} />
				  	<Form.Input
				  	  label="Subject"
				  	  name="subject"
				  	  onChange={this.handleChange} />
				  	<Form.Input
				  	  label="Message"
				  	  name="message"
				  	  onChange={this.handleChange} />
				  	<Form.Button primary>Send</Form.Button>
				  </Form>
			  </Container>
			</div>
		)
	}
}
