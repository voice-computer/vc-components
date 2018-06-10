import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Section from './section';

storiesOf('Molecules/Section', module)
	.add('simple input', () => (
		<Section
			sectionTitle={object('Title', {
				text: 'Exactly what is sounds like.'
			})}
			sectionText={object('Content', {
				text: [
					<span>
						Voice Computer is the all–in–one speech app for Dragon. Take control of
						your computer from a distance — all without the use of your hands.
					</span>
				]
			})}
		/>
	));
