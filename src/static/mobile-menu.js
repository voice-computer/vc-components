import React from 'react';
import sys from 'system-components';
import { Atoms, Organisms } from '../.';

const links = [
	{ text: 'Product', href: 'https://voicecomputer.com/product' },
	{ text: 'Pricing', href: 'https://voicecomputer.com/pricing' },
	{ text: 'About Us', href: 'https://voicecomputer.com/about-us/company' },
	{ type: 'divider' },
	{ text: 'Support', href: '/' },
	{ text: 'Community', href: 'http://forum.voicecomputer.com' },
	{ text: 'Blog', href: 'https://voicecomputer.com/blog' },
	{ text: 'Contact Us', href: 'https://voicecomputer.com/contact' }
];

const Divider = sys({
	borderTop: '1px solid',
	borderColor: 'neutral.2',
	my: 2
});

const MobileMenu = () => (
	<Organisms.MobileMenu
		cta
		isOpen
		renderMenu={dismissMenu => (
			<Atoms.Box mt={3}>
				<Atoms.NavLink
					onClick={dismissMenu}
					py={3}
					fontSize="1.2"
					href="https://voicecomputer.com/login"
					justifyContent="flex-start"
				>
					Sign In
				</Atoms.NavLink>
				<Divider />
				{links.map(({ text, type, ...props }) => {
					if (type === 'divider') return <Divider />;
					return (
						<Atoms.NavLink
							{...props}
							onClick={dismissMenu}
							py={3}
							fontSize="1.2"
							justifyContent="flex-start"
						>
							{text}
						</Atoms.NavLink>
					);
				})}
			</Atoms.Box>
		)}
	/>
);

export default MobileMenu;
