import sys from 'system-components';
import styled from 'styled-components';
import { fontSize } from 'utils';

const makeBox = sys(
	'flex',
	'display',
	'alignItems',
	'justifyContent',
	'color',
	'space',
	'borderRadius',
	'flexDirection',
	'hover',
	'flexWrap',
	'flexBasis',
	'alignSelf',
	'justifySelf',
	'borders',
	'gridTemplateColumns',
	'lineHeight',
	'minWidth',
	'maxWidth',
	'maxHeight',
	'width',
	'height',
	'boxShadow',
	'textAlign',
	'fontWeight'
);

const Box = styled(makeBox)`
	${fontSize};
`;

export default Box;
