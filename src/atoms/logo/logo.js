import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, display, height } from 'system-components';

import IconLogo from './icon-logo';
import LandscapeLogo from './landscape-logo';
import SquareLogo from './square-logo';

const LogoCSS = css`
	${color};
	${display};
	${height};
`;

const Icon = styled(IconLogo)`${LogoCSS}`;
const Landscape = styled(LandscapeLogo)`${LogoCSS};`;
const Square = styled(SquareLogo)`${LogoCSS};`;

const Logo = ({ type, ...props }) => (
	type === 'icon' ? (
		<Icon {...props} />
	) : type === 'square' ? (
		<Square {...props} />
	) : (
		<Landscape {...props} />
	)
);

Logo.propTypes = {
	type: PropTypes.oneOf(['square', 'landscape', 'icon'])
};

Logo.defaultProps = {
	type: 'square'
};

export default Logo;
