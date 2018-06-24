import styled from 'styled-components';
import { space, borderColor, color, height } from 'styled-system';
import { fontSize } from 'utils';
import tag from 'clean-tag';

const input = styled(tag.input).attrs({
	px: 3,
	py: props => props.py || 1,
	borderColor: props => (props.gray ? 'transparent' : 'neutral.2'),
	bg: props => (props.gray ? 'neutral.1' : 'white'),
	fontSize: props => (props.large ? [1, 2] : 1)
})`
	border-style: solid;
	border-width: 1px;
	box-shadow: none;
	${borderColor};
	${space};
	${color};
	${fontSize};
	${height};
`;

export default input;
