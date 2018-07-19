import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { lighten, darken } from 'polished';

const darkenColor = (props) => {
	switch (props.type) {
	case 'primary':
		return lighten(0.1, '#0934db');
	case 'secondary':
		return lighten(0.3, themeGet(`colors.${props.type}.secondary`)(props));
	default:
		return darken(0.05, themeGet(`colors.${props.type}.main`)(props));
	}
};

const mainColor = (props) => {
	switch (props.type) {
	case 'secondary':
		return themeGet(`colors.${props.type}.secondary`)(props);
	case 'primary':
		return '#0934db';
	default:
		return themeGet(`colors.${props.type}.main`)(props);
	}
};

const nostyle = css`
	background: transparent;
	border-color: transparent;
	color: ${mainColor};
	padding: 8px 0 !important;

	svg {
		color: ${mainColor};
		stroke: ${mainColor};
	}

	&:hover {
		color: ${darkenColor};

		svg {
			color: ${darkenColor};
			stroke: ${darkenColor};
			fill: ${darkenColor};
		}
	}

	&:active {
		color: ${mainColor};
	}
`;

export default nostyle;
