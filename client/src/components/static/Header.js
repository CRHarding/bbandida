import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div class="header">
			<nav>
				<Link to = "/about">
					About
				</Link>
				<Link to = "/contact">
					Contact
				</Link>
				<Link to = "/blogs">
					Blogs
				</Link>
				<Link to = "/cart">
					Cart
				</Link>
			</nav>
			<hr />
		</div>
	)
}

export default Header;