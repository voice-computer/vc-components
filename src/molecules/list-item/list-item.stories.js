import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ListItem from './list-item';

storiesOf('Molecules/List Item', module)
	.add('list item molecules', () => (
		<ListItem
			imageAttributes={{
				src: 'http://fillmurray.com/100/100',
				alt: 'something goes here'
			}}
			title="Something"
			subtitle="Something else"
			buttonAttributes={{
				text: 'Something',
				to: '/test'
			}}
		>
			I am stuff and stuff isn't this interesting!
		</ListItem>
	));
