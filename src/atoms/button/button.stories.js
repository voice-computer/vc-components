import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { Button, ButtonLink, ArrowButton } from 'atoms';

storiesOf('Atoms/Buttons', module)
	.add(
		'simple button',
		withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
			import { Atoms } from 'vc-components';

			<Atoms.Button>I am a simple button!</Atoms.Button>
            ~~~
        `)(() => (
			<Button
				large={boolean('isLarge', false)}
				onClick={action('button click')}
				type={select('button types', ['primary', 'secondary', 'tertiary'], 'primary')}
				outline={boolean('isOutline', false)}
				nostyle={boolean('isNoStyle', false)}
				squared={boolean('isSquared', false)}
				extraLarge={boolean('isExtraLarge', false)}
			>
				{text('Text', 'I am a simple button')}
			</Button>
		))
	)
	.add(
		'with internal link',
		withInfo(`
			## About
			A button that uses react router for internal linking

			## Usage
			~~~js
			import { Atoms } from 'vc-components';

			<Atoms.ButtonLink to="/">I am a button</Atoms.ButtonLink>
			~~~
		`)(() => (
			<ButtonLink
				large={boolean('isLarge', false)}
				to="/clicked-link"
				type={select('button types', ['primary', 'secondary', 'tertiary'], 'primary')}
				outline={boolean('isOutline', false)}
				nostyle={boolean('isNoStyle', false)}
				squared={boolean('isSquared', false)}
				extraLarge={boolean('isExtraLarge', false)}
			>
				{text('Text', 'I am a simple button')}
			</ButtonLink>
		))
	)
	.add(
		'with external link',
		withInfo(`
			## About
			A button that uses href for external linking and opens in a new tab, automatically
			adds rel attribute automatically.

			## Usage
			~~~js
			import { Atoms } from 'vc-components';

			<Atoms.ButtonLink href="#">I am a button</Atoms.ButtonLink>
			~~~
		`)(() => (
			<ButtonLink
				large={boolean('isLarge', false)}
				href="#"
				type={select('button types', ['primary', 'secondary', 'tertiary'], 'primary')}
				outline={boolean('isOutline', false)}
				nostyle={boolean('isNoStyle', false)}
				extraLarge={boolean('isExtraLarge', false)}
				squared={boolean('isSquared', false)}
			>
				{text('Text', 'I am a simple button')}
			</ButtonLink>
		))
	)
	.add(
		'with arrow button',
		withInfo(`
			## About
			An arrow button that executes an action

			## Usage
			~~~js
			import { Atoms } from 'vc-components';

			<Atoms.ArrowButton onClick={() => {}}>
			~~~
		`)(() => (
			<ArrowButton
				large={boolean('isLarge', false)}
				onClick={action('button clicked')}
				type={select('button types', ['primary', 'secondary', 'tertiary'], 'primary')}
				outline={boolean('isOutline', false)}
				nostyle={boolean('isNoStyle', false)}
				squared={boolean('isSquared', false)}
				extraLarge={boolean('isExtraLarge', false)}
			>
				{text('Text', 'I am a simple button')}
			</ArrowButton>
		))
	)
