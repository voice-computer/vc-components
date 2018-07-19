import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path d="M34,37H14C6.83154,37,1,31.16846,1,24s5.83154-13,13-13h20c7.16846,0,13,5.83154,13,13S41.16846,37,34,37z" fill="#43A6DD" />
				<path d="M14,31c-3.85986,0-7-3.14014-7-7s3.14014-7,7-7s7,3.14014,7,7S17.85986,31,14,31z" fill="#FFFFFF" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor" stroke="currentColor" strokeLinecap="square">
				<path d="M34,36H14 C7.4,36,2,30.6,2,24v0c0-6.6,5.4-12,12-12h20c6.6,0,12,5.4,12,12v0C46,30.6,40.6,36,34,36z" fill="none" stroke="currentColor" />
				<circle cx="14" cy="24" fill="none" r="6" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path d="M34,11H14C6.8,11,1,16.8,1,24s5.8,13,13,13h20c7.2,0,13-5.8,13-13S41.2,11,34,11z M14,31c-3.9,0-7-3.1-7-7 s3.1-7,7-7s7,3.1,7,7S17.9,31,14,31z" fill="currentColor" />
			</g>
		);
	}
};

Switch.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Switch.defaultProps = {
	type: 'glyph'
};

export default Switch;
