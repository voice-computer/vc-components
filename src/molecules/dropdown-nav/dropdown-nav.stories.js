import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import DropdownNav from './dropdown-nav';

storiesOf('Molecules/Dropdown Nav', module)
	.add('simple input', () => (
		<nav style={{ display: 'flex' }}>
			<DropdownNav title={text('title', 'Test Link')}>
				asdf
			</DropdownNav>
			<DropdownNav title={text('title', 'Test Link')}>
				asdf
			</DropdownNav>
			<DropdownNav title={text('title', 'Test Link')}>
				asdf
			</DropdownNav>
			<DropdownNav
				title={text('title', 'Test Link')}
				iconAttributes={{
					name: 'facebook',
					color: 'primary.main',
					iconSize: 'sm',
					mr: 2
				}}
			>
				asdf
			</DropdownNav>
		</nav>
	));
