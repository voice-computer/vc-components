import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import { SectionTitle, SectionText, SectionContainer } from './section';

storiesOf('Atoms/Section', module)
	.add('section title', () => (
		<SectionTitle is="h2" fontSize={3}>
			This is an example title
		</SectionTitle>
	))
	.add('section text', () => (
		<SectionText>
			This is an example
		</SectionText>
	))
	.add('section container', () => (
		<SectionContainer>
			<SectionText>
				This is an example
			</SectionText>
		</SectionContainer>
	));
