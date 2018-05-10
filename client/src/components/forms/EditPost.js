import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Container, Image } from 'semantic-ui-react';
import Services from '../services/Services';

export default class EditPost extends Component {
	constructor(props) {
		super(props)
		this.state={
			id: this.props.product.id,
			title: '',
			description: '',
			fireRedirect: false

		}
		this.submitEdit = this.submitEdit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	submitEdit() {
		Services.editProduct(this.state)
			.then(product => {
				console.log('edited product', product)
				this.setState({
					fireRedirect: true
				})
			})
			.catch(err => {
				console.log('error editing product', err)
			})
	}

	handleChange(e) {
	    const name = e.target.name;
	    const value = e.target.value;
	    this.setState({
	      [name]: value,
	    });
	  }

	render() {
    	let contributors = this.props.product.contributors.map(contributor => {
     	 return this.props.contributors.filter(
         contrib => contrib.id === contributor,
    	  );
   	    });
  		const product = this.props.product;
  		console.log('Product to edit', product)
		return (
		<div>
	        <br />	
	        <h4> EDIT FORM </h4>
	        <container>
	        {product.images.map(image => {
	        	return <Image src={image} width={200} height={200} />
	        })}
		        <br />
		            <Form onSubmit={this.submitEdit}>
		              <Form.Input
		              	type="hidden"
		              	name="id"
		              	value={this.state.id}
		              
		              />
		              <Form.Input
		                fluid
		                label="Title"
		                name="title"
		                placeholder={product.title}
		                value={this.state.title}
		                onChange={this.handleChange}
		              />
		              <Form.TextArea
		                label="About"
		                name="description"
		                value={this.state.description}
		                placeholder={product.description}
		                onChange={this.handleChange}
		              />
		              <Form.Button>Submit</Form.Button>
		            </Form>
		    </container>
		    <br/>
		    <br/>
		    {this.state.fireRedirect ? <Redirect to="/admin" /> : ''}
      	</div>
		)
	}
}