import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, color, hover, display, borderRadius, width, height } from 'styled-system';
import { Spin } from 'animations';
import iconMapper, { icons } from './icon-names';

// size is one of xs, s, md, lg, xl
const iconSize = {
	xs: '16px',
	sm: '24px',
	md: '32px',
	lg: '48px',
	xl: '64px'
};

// stroke width is 1-4
const strokeSize = {
	1: '1px',
	2: '2px',
	3: '3px',
	4: '4px'
};

// when using odd number stroke, we need to transform to stay on grid
const oddStroke = css`
	transform: translateX(0.5px) translateY(0.5px);
`;

const baseStyles = css`
	display: inline-block;
	${color};

	use {
		fill: inherit;
		stroke: none;
	}
`;

const outlineStyles = css`
	fill: none;
	stroke: currentColor;

	use {
		stroke: inherit;
		fill: none;
	}
`;

const alignToText = css`
	display: inline-block;
	width: 1em;
	height: 1em;
	vertical-align: middle;
	position: relative;
	top: -0.0625em;
	stroke: none;
	fill: none;

	use { color: inherit; }
`;

const SVGWrapper = styled.svg.attrs({
	height: prop => prop.height || iconSize[prop.iconSize],
	width: prop => prop.width || iconSize[prop.iconSize]
})`
	${baseStyles};
	${space};
	${hover};
	${color};
	${display};
	${borderRadius};
	${hover};
	${width};
	${height};
	${prop => prop.type === 'outline' && outlineStyles};
	${prop => prop.alignToText && alignToText};
	${prop => (prop.strokeSize === 1 || prop.strokeSize === 3) && oddStroke};
	${prop => (prop.rotate ? `transform: rotate(${prop.rotate});` : '')};

	stroke-width: ${prop => strokeSize[prop.strokeSize]};
	${props => props.spin && `
		animation: ${Spin} 1s ease infinite;
	`};
`;

const Icon = ({
	name,
	title,
	description,
	type,
	...props
}) => (
	<SVGWrapper type={type} {...props} viewBox="0 0 48 48">
		<g>
			{title && <title>{title}</title>}
			{description && <desc>{description}</desc>}
			{iconMapper(name, type)}
		</g>
	</SVGWrapper>
);

Icon.propTypes = {
	name: PropTypes.oneOf(Object.keys(icons)).isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	rotate: PropTypes.string,
	color: PropTypes.string,
	type: PropTypes.oneOf(['glyph', 'outline', 'colored']),
	strokeSize: PropTypes.oneOf([1, 2, 3, 4]),
	iconSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

Icon.defaultProps = {
	title: null,
	rotate: null,
	color: '#111111',
	description: null,
	type: 'glyph',
	strokeSize: 2,
	iconSize: 'md'
};

export default Icon;
