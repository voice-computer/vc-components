import { css } from 'styled-components';
import { lighten, darken } from 'polished';
import { themeGet } from 'styled-system';

const color = (props) => {
	const newColor = themeGet(`colors.${props.type}.main`)(props);
	return props.type === 'primary' ?
		lighten(0.1, newColor) :
		darken(0.1, newColor);
};

const hover = css`
	&:hover:not(:active):not(:focus) {
		background: ${color};
	}
`;

export default hover;
