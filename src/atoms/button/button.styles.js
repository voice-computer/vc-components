import { css } from 'styled-components';
import { fontSize } from 'utils';
import { hover, nostyle, outline, color } from 'styles';
import { space, themeGet, propTypes } from 'styled-system';

export const buttonStyles = css`
	display: inline-flex;
	align-items: center;
	font-weight: 600;
	justify-content: center;
	letter-spacing: 1px;
	border: none;
	border-radius: 0;
	cursor: pointer;
	transition: all .1s linear;
	text-decoration: none;

	background: ${props => themeGet(`colors.${props.type}.main`, '#f7f7f7')};
	color: ${props => themeGet(`colors.${props.type}.secondary`, '#2b2b2b')};

	${props => !props.nostyle && !props.outline && hover};
	${props => props.outline && outline};
	${props => props.nostyle && nostyle};

	${space};
	${color};
	${fontSize};
`;

export const buttonAttributes = {
	fontSize: props => (props.extraLarge ? [3, 4] : props.large ? [2, 3] : 1),
	px: props => (props.px || [4, 5]),
	py: props => (props.py || props.large ? 4 : [2, 3])
};
