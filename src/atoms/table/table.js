import sys from 'system-components';
import styled from 'styled-components';

export const TableContainer = sys(
	{
		is: 'table',
		m: 0,
		bg: 'white'
	},
	'color',
	'width',
	'flex',
	'flexWrap',
	'justifyContent',
	'alignItems',
	'maxWidth',
	'boxShadow',
	'borderRadius'
);

export const TableSection = styled(TableContainer)`
	border: none;

	& > tr > th,
	& > tr:last-of-type > td {
		border-bottom: none;
	}

	& > tr > td:last-of-type {
		border-right: none;
	}
`;

export const TableCell = sys(
	{
		p: 3,
		fontSize: '1.1rem',
		bg: 'transparent'
	},
	'textAlign',
	'display',
	'flex',
	'alignItems',
	'justifyContent',
	'maxWidth',
	() => `
		border-bottom: 1px solid;
		border-right: 1px solid;
		border-color: #eeeff1;
	`
);
