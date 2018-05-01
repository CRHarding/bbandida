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
	}

	render() {
		return (
			<div>
				<Header />
				<h1>BB and IDA</h1>
				<Products />
			</div>
		)
	}
}