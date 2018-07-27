import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import ArticleRow from './article-row';

storiesOf('Molecules/Article Row', module)
	.add('blog article listing item', () => (
		<ArticleRow
			title="Example title of article"
			subtitle="Category"
			description="Examle of a long descripton stuff goes here blah blah blah"
			to="/test"
			imageAttributes={{
				src: 'http://www.fillmurray.com/896/504',
				alt: 'bill murray here'
			}}
			authorName="John Doe"
		/>
	));
