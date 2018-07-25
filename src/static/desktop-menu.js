import React from 'react';

import { Organisms } from '../.';
import DesktopLeftNav from './desktop-left-nav';
import DesktopRightNav from './desktop-right-nav';

const DesktopMenu = () => (
	<Organisms.DesktopMenu
		renderLeftNav={DesktopLeftNav}
		renderRightNav={DesktopRightNav}
	/>
);

export default DesktopMenu;
