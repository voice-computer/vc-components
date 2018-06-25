import styled from 'styled-components';
import { target } from 'react-aim';
import { space, boxShadow, borderRadius } from 'styled-system';
import { SwingIn } from 'animations';

const Dropdown = styled.div.attrs({
	p: [3, 4],
	boxShadow: 2,
	borderRadius: 4
})`
	position: absolute;
	padding: 0;
	display: inline-block;
	left: 0;
	top: 8px;
	min-width: 250px;

	${SwingIn};

	&::after,
	&::before {
		bottom: 100%;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	&::after {
		border-color: rgba(255, 255, 255, 0);
		border-bottom-color: #ffffff;
		border-width: 9px;
		left: 35px;
		margin-left: -9px;
	}

	&::before {
		border-color: rgba(113, 158, 206, 0);
		border-bottom-color: #ececec;
		border-width: 10px;
		left: 35px;
		margin-left: -10px;
	}

	${space};
	${boxShadow};
	${borderRadius};
`;

export default target()(Dropdown);
