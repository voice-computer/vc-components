import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, hover } from 'styled-system';
import { Icon } from 'atoms';

import { icons } from './icon-names';

const IconWrapper = styled.div`
	${space};
	${color};
	${hover};

	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`;

const IconCircle = ({ iconAttributes, ...props }) => (
	<IconWrapper {...props}>
		<Icon {...iconAttributes} />
	</IconWrapper>
);

IconCircle.propTypes = {
	iconAttributes: PropTypes.shape({
		name: PropTypes.oneOf(Object.keys(icons)).isRequired,
		title: PropTypes.string,
		description: PropTypes.string,
		rotate: PropTypes.string,
		color: PropTypes.string,
		type: PropTypes.oneOf(['glyph', 'outline', 'colored']),
		strokeSize: PropTypes.oneOf([1, 2, 3, 4]),
		iconSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
	}).isRequired
};

export default IconCircle;
