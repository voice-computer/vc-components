import styled from 'styled-components';
import { space, color, fontWeight } from 'styled-system';
import Link from 'gatsby-link';
import { Atoms, Utils } from '../../.';

export const BlogBox = styled(Atoms.Box)`
	a {
		color: #5677FC;
		text-decoration: none;
		&:hover {
			color: #202d4a;
		}
	}

	& > div:first-of-type a {
		color: #202d4a;
		&:hover {
			color: #5677fc;
		}
	}
`;

export const BlogLink = styled(Link).attrs({
	fontSize: 0,
	pt: ({ pt }) => pt || 1
})`
	display: flex;
	align-items: center;
	svg {
		height: 12px;
		width: 12px;
	}
	${Utils.fontSize};
	${space};
	${color};
	${fontWeight};
`;
