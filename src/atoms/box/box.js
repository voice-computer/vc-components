import sys from 'system-components';
import { fontSize } from 'utils';

const Box = sys(
	'flex',
	'display',
	'alignItems',
	'justifyContent',
	'color',
	'space',
	'borderRadius',
	'flexDirection',
	'flexWrap',
	'flexBasis',
	'alignSelf',
	'justifySelf',
	'borders',
	'minWidth',
	'maxWidth',
	'maxHeight',
	'width',
	'height',
	'boxShadow',
	'textAlign',
	'fontWeight',
	() => `
		${fontSize};
	`
);

export default Box;
