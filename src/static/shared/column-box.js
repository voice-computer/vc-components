import styled from 'styled-components';
import { Atoms } from '../../.';

const ColumnBox = styled(Atoms.Box)`
	display: flex;
	flex-flow: row wrap;
	& > * {
		flex: 1 40%;
	}
`;

export default ColumnBox;
