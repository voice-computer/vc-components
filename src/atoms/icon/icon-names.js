import React from 'react';
import * as IconListing from './icon-listing';

export const icons = {
	rightArrow: 'RightArrow',
	google: 'Google',
	chevron: 'Chevron',
	check: 'Check',
	minus: 'Minus',
	menu: 'Menu',
	close: 'Close',
	phone: 'Phone',
	people: 'People',
	company: 'Company',
	book: 'Book',
	switch: 'Switch',
	chat: 'Chat',
	facebook: 'Facebook',
	mail: 'Mail',
	medium: 'Medium',
	twitter: 'Twitter',
	youtube: 'Youtube',
	user: 'User',
	award: 'Award',
	card: 'Card'
};

const Icon = (icon, type) => {
	const name = icons[icon];
	const Component = IconListing[name];
	return <Component type={type} />;
};

const IconMapper = (name, style = 'glyph') => Icon(name, style);

export default IconMapper;
