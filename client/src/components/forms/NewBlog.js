import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import Services from '../services/Services';
import AdminHeader from './AdminHeader';

export default class NewBlog extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			body: ''
		}
		this.submitForm = this.submitForm.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	submitForm() {
		console.log('Submitting blog', this.state)
		Services.createBlog(this.state)
	}

	handleChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value
		})
	}

	render() {
		return(
			<div>
				<AdminHeader />
				<br />
				<h1>blog page</h1>
				<br/>
				<Container>
		            <Form onSubmit={this.submitForm}>
		              <Form.Input
		                label="Title"
		                name="title"
		                placeholder="title of blog"
		                value={this.state.title}
		                onChange={this.handleChange}
		              />
		              <Form.TextArea
		              	
		                label="Blog Here"
		                name="body"
		                value={this.state.body}
		                placeholder="write your blog"
		                onChange={this.handleChange}
		              />
		              <Form.Button>Submit</Form.Button>
		            </Form>
	            </Container>
			</div>
		)
	}
}
