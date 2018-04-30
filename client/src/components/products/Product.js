import React from 'react';

const Product = (props) => {
	console.log('PRODUCT ->', props)
	let contributors = props.contributors.map(contributor => {
		return props.contribs.filter(contrib => contrib.id === contributor)
	})
	return (
		<div>
			<p> {props.description} </p>
			<p> {props.price} </p>
			{props.image_ids.map(image => {
				return <p> photo: <img src="#" /> {image} id </p>
			})}
			{contributors.map(contrib => {
				console.log(contrib)
				return  <p>contributor: {contrib[0].name}<br/>
						   role: {contrib[0].role}<br/>
						   link: {contrib[0].link}</p>

			})}
		</div>
	)
}

export default Product;