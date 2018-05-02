import React, { Component } from 'react';
import ProductSingle from './ProductSingle';

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			click: false
		}
		this.onClick = this.onClick.bind(this)
	}

	onClick() {
		this.setState({
			click: !this.state.click
		})
		console.log('click', this.state.click)
	}

	render() {
		console.log('PRODUCT', this.props.product)
		console.log('CONTRIBUTORS', this.props.contributors)
		return(
			<div>
				{this.state.click ? <ProductSingle product={this.props.product} contributors={this.props.contributors}  /> : ''}
				<img src={this.props.product.image_ids[0]} onClick={this.onClick} /> 
			</div>
		)
	}
}

// const Product = (props) => {
// 	// const click = () => {
// 	// 	this.setState({
// 	// 		show: false
// 	// 	});
// 	// 	console.log('click')
// 	// }
// 	console.log('PRODUCT ->', props)
// 	let contributors = props.contributors.map(contributor => {
// 		return props.contribs.filter(contrib => contrib.id === contributor)
// 	})
// 	return (
// 		<div>
// 			{/* if user clicks photo product description */}
// 			<ProductSingle />

// 			{/*<p> {props.description} </p>
// 			<p> {props.price} </p>*/}
// 			{props.image_ids.map(image => {
// 				return <div key={image} ><img src="#" /></div>
// 			})}
// 			{contributors.map(contrib => {
// 				console.log(contrib)
// 				return  <p>contributor: {contrib[0].name}<br/>
// 						   role: {contrib[0].role}<br/>
// 						   link: {contrib[0].link}</p>

// 			})}
// 		</div>
// 	)
// }