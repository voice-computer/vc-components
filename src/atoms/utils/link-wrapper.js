import React from 'react';
import PropTypes from 'prop-types';
import sys from 'system-components';
import Link from 'gatsby-link';

const ExternalLink = sys({
	is: 'a',
	color: 'inherit',
	textDecoration: 'none',
	display: 'block',
	hover: {
		color: 'currentColor !important',
		textDecoration: 'none'
	}
}, 'height');

const InternalLink = ExternalLink.withComponent(Link);

const LinkWrapper = ({ to, href, children, ...props }) => {
	if (to) return <InternalLink to={to} {...props}>{children}</InternalLink>;
	else if (href) return <ExternalLink href={href} {...props} target="_blank" rel="noopener noreferrer">{children}</ExternalLink>;
	return <span>{children}</span>;
};

export default LinkWrapper;
