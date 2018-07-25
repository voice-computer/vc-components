import React from 'react';
import styled from 'styled-components';
import { Atoms } from '../.';

const ArrowButtonLink = styled(Atoms.ArrowButtonLink)`
	svg {
		box-sizing: content-box;
		margin-bottom: 3px;
	}
`;

const DesktopRightNav = () => (
	<React.Fragment>
		<Atoms.NavLink href="https://voicecomputer.com/login">Sign In</Atoms.NavLink>
		<ArrowButtonLink href="https://voicecomputer.com/sign-up" type="secondary" squared>
			Try Free
		</ArrowButtonLink>
	</React.Fragment>
);

export default DesktopRightNav;
