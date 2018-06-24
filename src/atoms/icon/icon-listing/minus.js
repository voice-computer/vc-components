import React from 'react';
import PropTypes from 'prop-types';

const Minus = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path fill="#E86C60" d="M34,23H14c-0.55225,0-1,0.44775-1,1s0.44775,1,1,1h20c0.55225,0,1-0.44775,1-1S34.55225,23,34,23z" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor">
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="34" y1="24" x2="14" y2="24" strokeLinejoin="miter" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<rect x="12" y="22" fill="currentColor" width="24" height="4" />
			</g>
		);
	}
};

Minus.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Minus.defaultProps = {
	type: 'glyph'
};

export default Minus;
