import React, { Component } from 'react';
import Header from './static/Header';

export default class Cart extends Component {
	constructor() {
		super()
		this.state = {
			items: ''
		}
	}

	render() {
		return(
			<div>
				<Header />
				<h1>Cart Page</h1>
			</div>
		)
	}
}