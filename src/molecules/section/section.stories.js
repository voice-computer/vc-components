import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object, select } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { SectionText } from 'atoms';
import Section from './section';

storiesOf('Molecules/Section', module)
	.add('simple input', () => (
		<Section
			is="header"
			bg="neutral.1"
			p={[2, 4, 6]}
			justifyContent="center"
			titleAttributes={object('Title', {
				text: 'Exactly what is sounds like.',
				fontSize: [2, 3],
				textAlign: 'center'
			})}
			headerDivider={select('Divider', [null, 'red', 'yellow', 'green', 'blue'])}
			subtitleAttributes={object('Subtitle', {
				text: 'Voice Computer enables you to each even greater heights',
				pt: [2, 3],
				fontSize: 1,
				textAlign: 'center'
			})}
		>
			<SectionText>Hi there!</SectionText>
		</Section>
	));
