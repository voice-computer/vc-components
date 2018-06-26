import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import Icon from './icon';
import IconCircle from './icon-circle';
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
			rotate={text('Rotation', '0deg')}
		/>
	))
	.add('circle icon', () => (
		<IconCircle
			{...{
				p: number('padding', 5, {}, 'Circle Attributes'),
				bg: text('Background', 'tomato', 'Circle Attributes')
			}}
			iconAttributes={{
				name: select('icon', Object.keys(icons), 'rightArrow', 'Icon Attributes'),
				type: select('Icon Type', ['glyph', 'outline', 'colored'], 'Icon Attributes'),
				strokeSize: select('Stroke', [1, 2, 3, 4], null, 'Icon Attributes'),
				iconSize: select('Size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md', 'Icon Attributes'),
				rotate: text('Rotation', '0deg', 'Icon Attributes'),
				color: text('Color', 'white', 'Icon Attributes')
			}}
		/>
	));
