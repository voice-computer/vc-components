import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Input from './input';
import Toggle from './toggle';
import Label from './label';

storiesOf('Atoms/Form', module)
	.add('input', () => (
		<Input
			large={boolean('isLarge', false)}
			gray={boolean('isGrey', false)}
			type="text"
		/>
	))
	.add('label', () => (
		<Label>
			test content
		</Label>
	))
	.add('inline input with label', () => (
		<Label inline>
			{text('label', 'first name')}
			<Input
				large={boolean('isLarge', false)}
				gray={boolean('isGrey', false)}
				placeholder="user@example.com"
				type="text"
			/>
		</Label>
	))
	.add('input with label', () => (
		<Label>
			{text('label', 'first name')}
			<Input
				large={boolean('isLarge', false)}
				gray={boolean('isGrey', false)}
				placeholder="user@example.com"
				type="text"
			/>
		</Label>
	))
	.add('toggle', () => (
		<Toggle
			isChecked
			handleChange={action('toggled')}
			onState={{
				label: 'Monthly',
				value: 'monthly',
				render: () => (<p>test</p>)
			}}
			offState={{
				label: 'Annual',
				value: 'annual',
				render: () => (<p>test</p>)
			}}
		/>
	));
