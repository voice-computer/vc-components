import React from 'react';
import { Atoms } from '../.';

const DesktopLeftNav = () => (
	<React.Fragment>
		<Atoms.NavLink href="https://voicecomputer.com/product">Product</Atoms.NavLink>
		<Atoms.NavLink href="https://voicecomputer.com/pricing">Pricing</Atoms.NavLink>
		<Atoms.NavLink href="https://voicecomputer.com/blog">Blog</Atoms.NavLink>
		<Atoms.NavLink href="https://voicecomputer.com/about-us/company">About Us</Atoms.NavLink>
	</React.Fragment>
);

export default DesktopLeftNav;
