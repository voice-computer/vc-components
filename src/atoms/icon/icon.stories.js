import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Icon from './icon';
import { icons } from './icon-names';

storiesOf('Atoms/Icon', module)
	.add('simple icons', () => (
		<Icon
			name={select('icon', Object.keys(icons), 'rightArrow')}
			title={text('Icon Title', 'Right Arrow', 'Accessibility')}
			description={text('Icon Description', 'Right Arrow', 'Accessibility')}
			type={select('Icon Type', ['glyph', 'outline', 'colored'])}
			strokeSize={select('Stroke', [1, 2, 3, 4])}
			iconSize={select('Size', ['xs', 'sm', 'md', 'lg', 'xl'])}
		/>
	));
