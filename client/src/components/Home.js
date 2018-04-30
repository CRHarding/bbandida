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
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		return (
			<div>
				<Header />
				<h1>BB and IDA</h1>

		{/* when user clicks product a single view will show on same page */}
				{ this.state.show ? <Product /> : '' }
				
				<Products />
				<button onClick={this.buttonClick}>test</button>
				
			</div>
		)
	}
}