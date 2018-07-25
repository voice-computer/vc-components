import React from 'react';
import styled from 'styled-components';
import { Organisms } from '../.';

const footerLinks = [
	{
		title: 'Product',
		links: [
			{
				key: 'features',
				href: 'https://voicecomputer.com/product',
				text: 'Features'
			},
			{
				key: 'pricing',
				href: 'https://voicecomputer.com/pricing',
				text: 'Pricing'
			},
			{
				key: 'sales',
				href: 'https://voicecomputer.com/contact',
				text: 'Contact Sales'
			}
		]
	},
	{
		title: 'Resources',
		links: [
			{
				key: 'support',
				href: '/',
				text: 'Support'
			},
			{
				href: 'http://forum.voicecomputer.com',
				key: 'forum',
				text: 'Community Forum',
				target: '_blank'
			},
			{
				key: 'blog',
				href: 'https://voicecomputer.com/blog',
				text: 'Our Blog'
			}
		]
	},
	{
		title: 'About Us',
		links: [
			{
				key: 'company',
				href: 'https://voicecomputer.com/about-us/company',
				text: 'Company'
			},
			{
				key: 'customers',
				href: 'https://voicecomputer.com/about-us/customers',
				text: 'Our Customers'
			},
			{
				key: 'contact',
				href: 'https://voicecomputer.com/contact',
				text: 'Contact Us'
			}
		]
	}
];

const StyledFooter = styled(Organisms.Footer)`
	margin-top: auto;
`;

const Footer = () => (
	<StyledFooter
		title="Voice Computer"
		links={footerLinks}
		renderLegal={() => (
			<div>
				Copyright &copy; VoiceTeach LLC. All rights reserved.
			</div>
		)}
	/>
);

export default Footer;
