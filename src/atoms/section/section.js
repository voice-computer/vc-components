import sys from 'system-components';
import { css } from 'styled-components';
import { fontSize } from 'utils';

export const SectionTitle = sys(
	{
 		m: 0,
		fontSize: 2,
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

export const SectionText = sys(
	{
		is: 'p',
		my: 3
	},
	() => css`
		${fontSize};
	`
);

export const SectionContainer = sys(
	{
		m: 0,
		display: 'flex',
		flexDirection: 'column'
	},
	'color', 'flex', 'flexWrap', 'justifyContent', 'alignItems'
);
