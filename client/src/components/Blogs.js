import React, { Component } from 'react';
import Header from './static/Header';
import { Container } from 'reactstrap';

export default class Blogs extends Component {


	render() {
		return(
			<div>
				<Header />
				<br/>
				<br/>
				<Container>
					<h1 className="blog">Blog</h1>
				</Container>
			</div>
		)
	}
}