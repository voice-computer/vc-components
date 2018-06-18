import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import { ArrowButton, DividerFooter } from 'atoms';


storiesOf('Atoms/Footer', module)
	.add('divider footer', () => (
		<DividerFooter>
			<ArrowButton nostyle onClick={() => {}}>Something goes here</ArrowButton>
		</DividerFooter>
	));
