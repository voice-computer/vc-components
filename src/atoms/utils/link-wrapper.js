import React from 'react';
import PropTypes from 'prop-types';
import { height } from 'styled-system';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

const nostyle = css`
	color: inherit;
	display: block;
	text-decoration: none;
	${height};

	&:hover {
		color: currentColor;
		text-decoration: none;
	}
`;

const ExternalLink = styled.a`${nostyle}`;
const InternalLink = styled(Link)`${nostyle}`;

const LinkWrapper = ({ to, href, children, ...props }) => {
	if (to) return <InternalLink to={to} {...props}>{children}</InternalLink>;
	else if (href) return <ExternalLink href={href} {...props} target="_blank" rel="noopener noreferrer">{children}</ExternalLink>;
	return children;
};

export default LinkWrapper;
