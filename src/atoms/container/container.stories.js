import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import Container from './container';

storiesOf('Atoms/Container', module)
	.add('simple container', () => (
		<Container>tester</Container>
	));
