import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, ButtonLink } from 'atoms';

const buttonProps = {
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	large: PropTypes.bool,
	squared: PropTypes.bool,
	outline: PropTypes.bool,
	nostyle: PropTypes.bool,
	children: PropTypes.node.isRequired
};

const buttonDefaultProps = {
	type: 'primary',
	large: false,
	squared: false,
	outline: false,
	nostyle: false
};

export const ArrowButton = ({ children, ...props }) => (
	<Button {...props}>
		{children}
		<Icon
			color={`${props.type}.tertiary`}
			name="rightArrow"
			type="outline"
			strokeSize={3}
			iconSize="sm"
			aria-hidden
			pl={3}
		/>
	</Button>
);

ArrowButton.propTypes = buttonProps;
ArrowButton.defaultProps = buttonDefaultProps;

export const ArrowButtonLink = ({ children, ...props }) => (
	<ButtonLink {...props}>
		{children}
		<Icon
			color={`${props.type}.tertiary`}
			name="rightArrow"
			type="outline"
			strokeSize={3}
			iconSize="sm"
			aria-hidden
			pl={3}
		/>
	</ButtonLink>
);

ArrowButtonLink.propTypes = buttonProps;
ArrowButtonLink.defaultProps = buttonDefaultProps;
