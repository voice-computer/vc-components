import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { darken, lighten } from 'polished';

const darkenColor = props => darken(0.1, themeGet(`colors.${props.type}.main`)(props));
const color = props => themeGet(`colors.${props.type}.main`)(props);
const hoverColor = props => lighten(0.1, themeGet(`colors.${props.type}.main`)(props));
const hoverText = props => themeGet(`colors.${props.type}.secondary`)(props);

const outline = css`
	color: ${darkenColor};

	background: transparent;

	font-weight: 600;

	border-width: 1px;
	border-style: solid;
	border-color: ${color};

	svg {
		stroke: ${color};
		fill: ${color};
		color: ${color};
	}

	&:hover:not(:active):not(:focus) {
		color: ${hoverText};
		background-color: ${hoverColor};
	}

	&:active, &:focus {
		background-color: ${color};
		color: ${hoverText};
	}
`;

export default outline;
