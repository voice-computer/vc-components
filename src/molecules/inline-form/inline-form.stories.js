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
				type: 'email', name: 'email'
			})}
			buttonAttributes={{
				text: text('text', 'Submit', 'button controls'),
				type: select('type', ['primary', 'secondary', 'tertiary'], 'primary', 'button controls')
			}}
			label="Email"
			onSubmit={action('submit form')}
		/>
	));
