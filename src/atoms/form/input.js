import styled from 'styled-components';
import { space, borderColor, color, height, width } from 'styled-system';
import { fontSize } from 'utils';
import tag from 'clean-tag';

const input = styled(tag).attrs({
	px: 3,
	is: props => props.is || 'input',
	py: props => props.py || 2,
	borderColor: props => (props.gray ? 'transparent' : 'neutral.2'),
	bg: props => (props.gray ? 'neutral.1' : 'white'),
	fontSize: props => (props.large ? [1, 2] : 1)
})`
	border-style: solid;
	border-width: 1px;
	box-shadow: none;
	line-height: 1.25;
	box-sizing: border-box;
	${borderColor};
	${space};
	${color};
	${width};
	${fontSize};
	${height};
`;

export default input;
