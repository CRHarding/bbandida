import React, { Component } from 'react';
import Header from './static/Header';
import Product from './products/Product';
import Products from './products/Products';

export default class home extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
			dataLoaded: false,

		}
		this.buttonClick = this.buttonClick.bind(this)
	}

	buttonClick() {
		console.log('Clicked button')
		this.setState({
			show: true
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<Header />
				<h1>Main Body</h1>
				<small> line break </small>
				{ this.state.show ? <Product /> : '' }
				<small> line break </small>
				<Products />
				<button onClick={this.buttonClick}>test</button>
				
			</div>
		)
	}
}