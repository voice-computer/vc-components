import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import backgrounds from "@storybook/addon-backgrounds";
import infoAddon, { setDefaults } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';
import staticMarkup from 'react-storybook-addon-static-markup';
import '@storybook/addon-console';

import Theme from 'theme';

const req = require.context('../src', true, /\.stories\.js$/);

// Configure withInfo addon
setDefaults({ inline: false, source: false });
setAddon(infoAddon);
setAddon(staticMarkup);
// Configure storybook react router
addDecorator(StoryRouter());
addDecorator(withKnobs);
addDecorator(checkA11y);

// Configure background options
const backgroundOptions = [
	{
		name: 'Light Grey',
		value: '#F7F7F7'
	}
];
addDecorator(backgrounds(backgroundOptions));

// Configure theme
addDecorator(storyfn => (
	<Theme>
		{storyfn()}
	</Theme>
));

const loadStories = () => req.keys().forEach(f => req(f));

configure(loadStories, module);
