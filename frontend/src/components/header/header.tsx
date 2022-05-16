import React from 'react';
import Navigation from '../navigation/navigation';
import Quote from '../quote/quote';

import './header.css';

export default function Header() {
	return (
		<div id="header-wrapper">
			<h1 id="header-title">bice.rocks</h1>
			<Quote />
			<Navigation />
		</div>
	);
}
