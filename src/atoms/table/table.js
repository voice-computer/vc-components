import sys from 'system-components';
import styled from 'styled-components';

export const TableContainer = sys(
	{
		is: 'table',
		m: 0,
		bg: 'white'
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

export const TableSection = styled(TableContainer)`
	position: sticky;
	top: 0;
	border: none;

	& > tr > th,
	& > tr:last-of-type > td {
		border-bottom: none;
	}
`;

export const TableCell = sys(
	{
		p: [3, 4],
		fontSize: '1.1rem',
		bg: 'transparent'
	},
	'textAlign',
	() => `
		border-bottom: 1px solid;
		border-color: #eeeff1;
	`
);
