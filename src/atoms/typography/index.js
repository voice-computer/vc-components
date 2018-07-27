import sys from 'system-components';
import styled from 'styled-components';
import { fontSize } from 'utils';

const makeSubtitle = sys({
	m: 0,
	mb: 1,
	fontWeight: 600,
	color: 'neutral.4',
	letterSpacing: '.03rem',
	lineHeight: 1
});

export const Subtitle = styled(makeSubtitle).attrs({
	fontSize: [0, 1],
	is: props => props.is || 'h4'
})`
	text-transform: uppercase;
	${fontSize};
`;

const makeTitle = sys({
	lineHeight: 1.25,
	m: 0,
	color: 'neutral.6',
	letterSpacing: '.02rem'
});

export const Title = styled(makeTitle).attrs({
	fontSize: [2, 3],
	mb: props => props.mb || 3,
	is: props => props.is || 'h3'
})`
	${fontSize};
`;

export const Header = styled.header`
	display: flex;
	flex-flow: column nowrap;
	& > *:last-child {
		order: -1;
	}
`;
