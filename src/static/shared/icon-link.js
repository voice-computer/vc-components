import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hover, color, space } from 'styled-system';
import Link from 'gatsby-link';
import { Atoms } from '../../.';

const linkStyles = css`
	display: flex;
	align-items: ${props => (props.children ? 'flex-start' : 'center')};
	font-weight: 700;
	text-decoration: none;
	${color};
	${space};
	${hover};

	&:hover > div:first-of-type {
		background-color: #202D4A;
	}
`;

const linkAttributes = {
	color: 'secondary.tertiary',
	py: 2,
	hover: {
		color: 'primary.main'
	}
};

const BoxLink = styled(Link).attrs(linkAttributes)`${linkStyles}`;
const ExternalLink = styled.a.attrs(linkAttributes)`${linkStyles}`;

const Details = styled.div`
	${space};
	font-weight: normal;
`;

const IconLink = ({
	to, href, iconName, text, children, ...props
}) => (
	to ? (
		<BoxLink to={to} {...props} hasChildren={children}>
			<Atoms.IconCircle
				bg="secondary.tertiary"
				p={2}
				mr={3}
				iconAttributes={{
					color: 'white',
					name: iconName,
					iconSize: 'xs'
				}}
			/>
			<div>
				<div>{text}</div>
				{children && <Details>{children}</Details>}
			</div>
		</BoxLink>
	) : (
		<ExternalLink href={href} {...props} hasChildren={children}>
			<Atoms.IconCircle
				bg="secondary.tertiary"
				p={2}
				mr={3}
				iconAttributes={{
					color: 'white',
					name: iconName,
					iconSize: 'xs'
				}}
			/>
			<div>
				<div>{text}</div>
				{children && <Details>{children}</Details>}
			</div>
		</ExternalLink>
	)
);

IconLink.propTypes = {
	to: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	iconName: PropTypes.string.isRequired,
	children: PropTypes.node
};

IconLink.defaultProps = {
	children: null
};

export default IconLink;
