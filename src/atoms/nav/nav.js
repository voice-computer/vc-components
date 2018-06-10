import styled from 'styled-components';
import { fontSize } from 'utils';
import { space, maxWidth, display, color, hover, borderColor } from 'styled-system';
import Link from 'gatsby-link';
import tag from 'clean-tag';

export const SiteTitle = styled(tag.h1).attrs({
	maxWidth: ['80px', '80px', '174px']
})`
	margin: 0;
	height: 80px;
	display: inline-flex;
	transition: all .2s linear;
	${maxWidth};
`;

export const Nav = styled(tag.nav).attrs({
	display: ['none', 'flex'],
	borderColor: 'neutral.1'
})`
	align-items: stretch;
	justify-content: space-between;
	border-bottom-style: solid;
	border-bottom-width: 1px;


	& > div {
		display: flex;
	}

	${borderColor};
	${display};
`;

export const NavLink = styled(Link).attrs({
	fontSize: 1,
	px: [3, 3, 4],
	color: 'neutral.4',
	hover: {
		color: 'neutral.6',
		textDecoration: 'underline'
	}
})`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	${fontSize};
	${space};
	${hover};
	${color};
`;
