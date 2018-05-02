import React, { Component } from 'react';
import Header from './static/Header';
import Products from './products/Products';
import Services from './services/Services';

export default class home extends Component {
	constructor() {
		super();
		this.state = {
			dataLoaded: false,
			cdataLoaded: false,
			data: null,
			contributors: null
		}
	}

	componentDidMount() {
		Services.getProducts()
			.then(products => {
				console.log('Returned all products', products)
				this.setState({
					dataLoaded: true,
					data: products.data.products
				})
			})
			.catch(err => {
				console.log('error in getting all products')
			})

		Services.getContribs()
			.then(contribs => {
				console.log('Returned all contributors', contribs)
				this.setState({
					cdataLoaded: true,
					contributors: contribs.data.contributors
				})
			})
			.catch(err => {
				console.log('error in getting contributors')
			})
	}

	render() {
		return (
			<div>
				<Header />
				<h1>BB and IDA</h1>
				{this.state.dataLoaded && this.state.cdataLoaded ? <Products products={this.state.data} contributors={this.state.contributors} /> : 'Loading..'}
			</div>
		)
	}
}