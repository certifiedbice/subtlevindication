import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';

export default function Navigation() {
	return (
		<div id="navigation-wrapper">
			<h2>
				{/* Need to add active class */}
				<Link className="navigation-link" to="/">
					Home
				</Link>
			</h2>
			<h2>
				<Link className="navigation-link" to="/about">
					About
				</Link>
			</h2>
			<h2>
				<Link className="navigation-link" to="/contact">
					Contact
				</Link>
			</h2>
			<h2>
				<Link className="navigation-link" to="/portfolio">
					Portfolio
				</Link>
			</h2>
			<h2>
				<Link className="navigation-link" to="/resume">
					Resume
				</Link>
			</h2>
			<h2>
				<Link className="navigation-link" to="/store">
					Store
				</Link>
			</h2>
		</div>
	);
}
