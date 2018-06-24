import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable import/no-extraneous-dependencies */

import Table from './table';

storiesOf('Molecules/Table', module)
	.add('simple input', () => (
		<Table
			headerCells={[
				{ text: 'Key Feature' },
				{ text: 'Voice Computer' },
				{ text: 'Enterprise' }
			]}
			bodyCells={[
				[{ text: 'Voice-Controlled mouse' },
					{
						iconAttributes: { name: 'rightArrow' },
						cellAttributes: { textAlign: 'center' }
					},
					{ text: 'Voice-Controlled mouse' }],
				[{ text: 'Voice-Controlled mouse' },
					{ text: 'Voice-Controlled mouse' },
					{ text: 'Voice-Controlled mouse' }]
			]}
			boxShadow={2}
		/>
	));
