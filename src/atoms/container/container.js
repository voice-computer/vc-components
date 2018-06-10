import styled from 'styled-components';
import { space, color, boxShadow } from 'styled-system';
import { fontSize } from 'utils';
import tag from 'clean-tag';

const Container = styled(tag.div).attrs({
	mx: 'auto',
	boxShadow: '2',
	color: 'neutral.5',
	fontSize: 1
})`
	line-height: 1.5;
	max-width: 1440px;

	${color};
	${space};
	${boxShadow};
	${fontSize};
`;

export default Container;
