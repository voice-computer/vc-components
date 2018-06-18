import sys from 'system-components';
import styled from 'styled-components';
import { css } from 'styled-components';
import { fontSize } from 'utils';
import { space, color, fontWeight, lineHeight, display, maxWidth, textAlign } from 'styled-system';

export const SectionTitle = sys(
	{
		m: 0,
		fontSize: 2
	},
	'color',
	'fontWeight',
	'lineHeight',
	'display',
	'maxWidth',
	'textAlign',
	() => css`
		${fontSize};
	`
);

export const SectionText = styled.p.attrs({
	my: props => props.my || 3
})`
	${space};
	${color};
	${fontWeight};
	${lineHeight};
	${display};
	${maxWidth};
	${textAlign};
	${fontSize};
`;

export const SectionContainer = sys(
	{
		m: 0,
		display: 'flex',
		flexDirection: 'column'
	},
	'color',
	'flex',
	'flexWrap',
	'justifyContent',
	'alignItems',
	'maxWidth',
	'boxShadow',
	'borderRadius'
);
