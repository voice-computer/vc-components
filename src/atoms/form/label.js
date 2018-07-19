import styled, { css } from 'styled-components';
import sys from 'system-components';

const blockedLabel = css`
	& > input:last-of-type {
		margin-top: 4px;
		box-sizing: border-box;
		width: 100%;
	}
`;

const inlineLabel = css`
	display: grid;
	grid-template-columns: 200px 1fr;
	align-items: ${props => props.alignItems || 'center'};

	@media (max-width: 40rem) {
		display: block;
		${blockedLabel};
	}
`;

const noStyle = css`
	margin: 0;
	padding: 0;
`;

const makeLabel = sys({
	is: 'label'
}, 'display', 'space', 'color', 'alignItems', 'justifyContent', 'flexWrap', 'flexDirection');

const Label = styled(makeLabel)`
	transition: color .2s ease-in-out;
	${props => (props.nostyle ? noStyle : props.inline ? inlineLabel : blockedLabel)};
`;

export default Label;
