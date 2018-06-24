import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const blockedLabel = css`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;

	& > input:last-of-type {
		margin-top: 4px;
		box-sizing: border-box;
		width: 100%;
	}
`;

const inlineLabel = css`
	display: grid;
	grid-template-columns: 200px 1fr;
	align-items: center;

	@media (max-width: 40rem) {
		${blockedLabel};
	}
`;

const noStyle = css`
	margin: 0;
	padding: 0;
`;

const Label = styled.label`
	${space};
	${props => (props.nostyle ? noStyle : props.inline ? inlineLabel : blockedLabel)};
`;

export default Label;
