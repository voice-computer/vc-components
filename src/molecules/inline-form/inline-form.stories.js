import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object, text, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import InlineForm from './inline-form';

storiesOf('Molecules/Inline Form', module)
	.add('simple input', () => (
		<InlineForm
			inputAttributes={object('input', {
				type: 'email', name: 'email', gray: true
			})}
			buttonAttributes={{
				text: text('text', 'Submit', 'button controls'),
				type: select('type', ['primary', 'secondary', 'tertiary'], 'primary', 'button controls')
			}}
			label="Email"
			onSubmit={action('submit form')}
		/>
	))
	.add('promise success submit', () => {
		const submit = x => new Promise(resolve => setTimeout(() => resolve(action('submit form')(x)), 1000));
		return (
			<InlineForm
				inputAttributes={object('input', {
					type: 'email', name: 'email', gray: true
				})}
				buttonAttributes={{
					text: text('text', 'Submit', 'button controls'),
					type: select('type', ['primary', 'secondary', 'tertiary'], 'primary', 'button controls')
				}}
				label="Email"
				onSubmit={submit}
			/>
		);
	})
	.add('promise error submit', () => {
		const submit = x => new Promise((resolve, reject) => setTimeout(() => reject(action('submit form')(x)), 1000));
		return (
			<InlineForm
				inputAttributes={object('input', {
					type: 'email', name: 'email', gray: true
				})}
				buttonAttributes={{
					text: text('text', 'Submit', 'button controls'),
					type: select('type', ['primary', 'secondary', 'tertiary'], 'primary', 'button controls')
				}}
				label="Email"
				onSubmit={submit}
			/>
		);
	});
