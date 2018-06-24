import styled from 'styled-components';
import { color, space } from 'styled-system';

const Divider = styled.hr.attrs({
	bg: props => (props.type ? `highlight.${props.type}` : 'red')
})`
	${color};
	${space};

	border: none;
	max-width: 12rem;
	width: 250px;
	height: 2px;
`;

export default Divider;
