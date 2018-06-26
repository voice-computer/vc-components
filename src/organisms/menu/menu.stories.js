import React, { Fragment } from 'react';
import styled from 'styled-components';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { ArrowButtonLink, NavLink, Box, Icon } from 'atoms';
import { DropdownNav } from 'molecules';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';

const ColumnBox = styled(Box)`
	display: flex;
	flex-flow: row wrap;
	& > * {
		flex: 1 40%;
	}
`;

storiesOf('Organisms/Menu', module)
	.add('desktop menu', () => (
		<DesktopMenu
			renderLeftNav={() => (
				<Fragment>
					<NavLink to="/product">Product</NavLink>
					<NavLink to="/about">Pricing</NavLink>
					<DropdownNav title="Resources" left="-83px">
						test
					</DropdownNav>
					<DropdownNav title="About Us" left="-85px">
						test
					</DropdownNav>
				</Fragment>
			)}
			renderRightNav={() => (
				<Fragment>
					<NavLink to="/about">Sign In</NavLink>
					<ArrowButtonLink to="/sign-up" type="secondary" squared>
						Try Free
					</ArrowButtonLink>
				</Fragment>
			)}
		/>
	))
	.add('mobile menu', () => (
		<MobileMenu
			cta={boolean('cta', false)}
			renderMenu={() => (
				<Box mt={3}>
					<NavLink py={2} fontSize="1.2" to="/login" justifyContent="flex-start">
						<span>Sign In</span>
						<Icon ml={4} name="rightArrow" type="outline" iconSize="sm" />
					</NavLink>
					<NavLink py={2} fontSize="1.2" to="/product" justifyContent="flex-start">Product</NavLink>
					<NavLink py={2} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Pricing</NavLink>
					<Box bg="neutral.1" mt="12px" mb="8px" py={2} fontWeight={600} px={3}>
						Resources
					</Box>
					<ColumnBox display="flex">
						<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">About Us</NavLink>
						<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Support</NavLink>
						<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Blog</NavLink>
						<NavLink py={3} fontSize="1.2" to="/Pricing" justifyContent="flex-start">Community</NavLink>
					</ColumnBox>
				</Box>
			)}
		/>
	));
