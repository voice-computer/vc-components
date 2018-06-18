import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { themeGet } from 'styled-system';
import { systemFonts } from 'utils';
import { lighten } from 'polished';
import colors from './colors';

const theme = {
	fonts: {
		0: `Poppins, ${systemFonts}`
	},
	fontSizes: [0.819, 1.092, 1.455, 1.94, 2.585, 3.446, 4.594],
	shadows: [
		'none',
		'rgba(50, 50, 93, 0.11) 0px 4px 6px 0px, rgba(0, 0, 0, 0.08) 0px 1px 3px 0px',
		'0 0 16px rgba(0, 0, 0, 0.1)',
		'0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)'
	],
	space: [0, 4, 8, 16, 24, 32, 64],
	lineHeights: [1, 1.125, 1.25, 1.5, 1.75],
	colors
};

const BaseFont = styled.div`
	font-family: ${themeGet('fonts.0')};
	text-rendering: optimizeLegibility;
	font-feature-settings: none;
	font-variant-ligatures: none;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;

	body {
		margin: 0;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: ${themeGet('fonts.0')};
	}

	::selection {
		background: rgba(0, 122, 255, .4);
	}
`;

export default class VoiceTheme extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			const webFont = require('webfontloader'); // eslint-disable-line
			webFont.load({
				google: {
					families: ['Poppins:400,400i,500,600,700']
				}
			});
		}
	}

	render = () => (
		<ThemeProvider theme={theme}>
			<BaseFont>
				{this.props.children}
			</BaseFont>
		</ThemeProvider>
	)
}
