import React, { Component } from 'react';
import Services from '../services/Services';
import Product from './Product';

export default class Products extends Component {
	constructor() {
		super();
		this.state = {
			dataLoaded: false,
			cdataLoaded: false,
			data: null,
			contributors: null
		}
		this.showProducts = this.showProducts.bind(this)
	}

	componentDidMount() {
		Services.getProducts()
			.then(products => {
				console.log('Returned all products')
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

	showProducts() {
		return(
			this.state.data.map(product => {
				return <Product {...product} key = {product.id} contribs = {this.state.contributors} />
			})
		)
	}

	render() {
		return(
			<div>
				<h1>products here</h1>
				{this.state.dataLoaded && this.state.cdataLoaded ? this.showProducts() : 'Loading..'}
			</div>
		)
	}
}