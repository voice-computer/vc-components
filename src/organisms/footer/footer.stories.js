import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object, text, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import Footer from './footer';

storiesOf('Organisms/Footer', module)
	.add('simple footer', () => (
		<Footer
			title="Voice Computer"
			imageAttributes={{
				src: 'http://fillmurray.com/100/100',
				alt: 'FIll Murray'
			}}
			links={[
				{
					title: 'Test',
					links: [
						{
							to: '/',
							text: 'Link'
						}
					]
				}
			]}
			newsLetter={{
				title: 'Stay in touch',
				message: 'Discover new features and tips through our monthly newsletter.',
				inputAttributes: object('input', {
					type: 'email',
					name: 'email',
					placeholder: 'jane.doe@example.com'
				}),
				buttonAttributes: {
					text: text('text', 'Submit', 'button controls'),
					type: select('type', ['primary', 'secondary', 'tertiary'], 'tertiary', 'button controls')
				},
				label: 'Email',
				onSubmit: action('submit form')
			}}
			renderLegal={() => (
				<div>
					Copyright &copy; VoiceTeach LLC. All rights reserved.
				</div>
			)}
			socialLinks={[
				{
					name: 'facebook',
					text: 'Follow us on Facebook',
					href: 'http://facebook.com'
				},
				{
					name: 'facebook',
					text: 'Follow us on Facebook',
					href: 'http://facebook.com'
				},
				{
					name: 'facebook',
					text: 'Follow us on Facebook',
					href: 'http://facebook.com'
				},
				{
					name: 'facebook',
					text: 'Follow us on Facebook',
					href: 'http://facebook.com'
				}
			]}
		/>
	));
