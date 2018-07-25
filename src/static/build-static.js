import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Container } from '../atoms';
import { Theme } from '../.'
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';
import Footer from './footer';

const sheet = new ServerStyleSheet();
const html = renderToString(
	<StaticRouter>
		<StyleSheetManager sheet={sheet.instance}>
			<Theme>
				<DesktopMenu />
				<MobileMenu />
				<Footer />
				<Container />
			</Theme>
		</StyleSheetManager>
	</StaticRouter>
);

const styleTags = sheet.getStyleTags();

fs.writeFileSync('static-render.txt', `
	${html}




	${styleTags};
`);
