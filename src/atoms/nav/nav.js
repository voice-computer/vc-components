import styled from 'styled-components';
import { fontSize } from 'utils';
import { space, maxWidth, display, color, hover, borderColor, justifyContent } from 'styled-system';
import Link from 'gatsby-link';
import tag from 'clean-tag';

export const SiteTitle = styled(tag.h1).attrs({
	maxWidth: ['80px', '80px', '174px']
})`
	margin: 0;
	display: inline-block;
	transition: all .2s linear;
	height: 80px;
	${maxWidth};
`;

export const Nav = styled(tag.nav).attrs({
	display: 'flex',
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
	${color};
	${display};
`;

export const DropdownButton = styled.button.attrs({
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
	background: transparent;
	border: none;
	${fontSize};
	${space};
	${hover};
	${color};
`;

export const NavLink = styled(Link).attrs({
	fontSize: props => props.fontSize || 1,
	px: [3, 3, 4],
	color: props => props.color || 'neutral.4',
	justifyContent: props => props.justifyContent || 'center',
	hover: {
		color: 'neutral.6',
		textDecoration: 'underline'
	}
})`
	display: flex;
	align-items: center;
	text-decoration: none;
	${fontSize};
	${space};
	${hover};
	${color};
	${justifyContent};
`;
