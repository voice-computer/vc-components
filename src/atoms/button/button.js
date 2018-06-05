import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { space, themeGet } from 'styled-system';
import { fontSize } from 'utils';
import { hover, nostyle, outline } from 'styles';

const buttonProps = {
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	large: PropTypes.bool,
	squared: PropTypes.bool,
	outline: PropTypes.bool,
	nostyle: PropTypes.bool
};

const buttonDefaultProps = {
	type: 'primary',
	large: false,
	squared: false,
	outline: false,
	nostyle: false
};

export const Button = styled.button.attrs({
	fontSize: props => props.extraLarge ? [3, 4] : props.large ? [2, 3] : [1, 2],
	px: 5,
	py: props => props.large ? 4 : 2
})`
	display: inline-flex;
	align-items: center;
	font-weight: 600;
	justify-content: center;
	letter-spacing: 1px;
	border: none;
	border-radius: ${props => props.squared ? 0 : '4px'};
	cursor: pointer;
	transition: all .1s linear;

	background: ${props => themeGet(`colors.${props.type}.main`, '#f7f7f7')};
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	${props => !props.nostyle && !props.outline && hover};
	${props => props.outline && outline};
	${props => props.nostyle && nostyle};

	svg {
		color: ${props => themeGet(`colors.${props.type}.tertiary`, 'white')};
	}

	${space};
	${fontSize};
`;

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;

const Link = Button.withComponent('a');
const ExternalLink = Link.extend`
	text-decoration: none;
`;
const LocalLink = ExternalLink.withComponent(RouterLink);

export const ButtonLink = ({ href, ...attrs }) => (
	href ? (
		<ExternalLink href={href} rel="noopener noreferrer" target="_blank" {...attrs} />
	) : (
		<LocalLink {...attrs} />
	)
);

ButtonLink.propTypes = buttonProps;
ButtonLink.defaultProps = buttonDefaultProps;
