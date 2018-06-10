import React, { Fragment } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import { ArrowButtonLink, NavLink } from 'atoms';
import DesktopMenu from './desktop-menu';

storiesOf('Organisms/Menu', module)
	.add('desktop menu', () => (
		<DesktopMenu
			renderLeftNav={() => (
				<Fragment>
					<NavLink to="/product">Product</NavLink>
					<NavLink to="/about">Pricing</NavLink>
					<NavLink to="/support">Support</NavLink>
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
	));
