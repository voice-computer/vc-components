import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import Logo from './logo';

storiesOf('Atoms/Logo', module)
	.add('default logo', () => <Logo />)
	.add('square logo', () => <Logo type="square" />)
	.add('landscape logo', () => <Logo type="landscape" />)
	.add('icon logo', () => <Logo type="icon" />);
