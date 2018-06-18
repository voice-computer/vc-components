import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { buttonStyles, buttonAttributes } from './button.styles';

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

export const Button = styled.button.attrs(buttonAttributes)`
	${buttonStyles};
`;

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;

const LocalLink = styled(({
	large, type, outline, nostyle, squared, extraLarge, ...props
}) => <Link {...props} />).attrs(buttonAttributes)`
	${buttonStyles};
`;

const ExternalLink = styled(({
	large, type, outline, nostyle, squared, extraLarge, children, ...props
}) => <a {...props}>{children}</a>).attrs(buttonAttributes)`
	${buttonStyles};
`;

export const ButtonLink = ({ href, ...attrs }) => (
	href ? (
		<ExternalLink
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			{...attrs}
		/>
	) : (
		<LocalLink {...attrs} />
	)
);

ButtonLink.propTypes = {
	href: PropTypes.string,
	...buttonProps
};
ButtonLink.defaultProps = {
	href: null,
	...buttonDefaultProps
};
