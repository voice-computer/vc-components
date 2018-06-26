import styled from 'styled-components';
import { target } from 'react-aim';
import { space, boxShadow, borderRadius } from 'styled-system';
import { SwingIn, SwingOut } from 'animations';

const Dropdown = styled.div.attrs({
	p: [3, 4],
	boxShadow: 2,
	borderRadius: 4
})`
	position: absolute;
	padding: 0;
	display: inline-block;
	left: ${props => props.left || '-50%'};
	top: -8px;
	background: white;
	z-index: 500;
	min-width: ${props => props.minWidth || '250px'};

	${props => (props.display ? SwingIn : SwingOut)};
	display: ${props => (props.display ? 'block' : 'none')};

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
		left: 50%;
		margin-left: -9px;
	}

	&::before {
		border-color: rgba(113, 158, 206, 0);
		border-bottom-color: #ececec;
		border-width: 10px;
		left: 50%;
		margin-left: -10px;
	}

	${space};
	${boxShadow};
	${borderRadius};
`;

export default target()(Dropdown);
