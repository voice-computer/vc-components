import { css } from 'styled-components';
import { lighten, darken } from 'polished';
import { themeGet } from 'styled-system';

const color = (props) => {
	const color = themeGet(`colors.${props.type}.main`)(props);
	return props.type === 'secondary' ?
		darken(0.1, color) :
		lighten(0.1, color);

}

const hover = css`
	&:hover:not(:active):not(:focus) {
		background: ${color};
	}
`;

export default hover;
