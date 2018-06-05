import { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { lighten } from 'polished';

const darkenColor = props => lighten(0.2, themeGet(`colors.${props.type}.main`)(props));
const mainColor = props => themeGet(`colors.${props.type}.main`)(props);

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
