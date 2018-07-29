import React from 'react';
import PropTypes from 'prop-types';

const Medium = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<rect height="48" id="Rectangle-path" width="48" fill="#e5f3ec" />
				<path id="Shape" d="M11.455,16.053A1.249,1.249,0,0,0,11.048,15L8.037,11.373v-.542h9.349l7.226,15.848,6.353-15.848h8.912v.542L37.3,13.841a.752.752,0,0,0-.286.722V32.7a.752.752,0,0,0,.286.722l2.514,2.468v.542H27.171v-.542l2.6-2.528c.256-.256.256-.331.256-.722V17.98L22.79,36.371h-.979L13.381,17.98V30.305a1.7,1.7,0,0,0,.467,1.415l3.387,4.109v.542h-9.6v-.542l3.387-4.109a1.64,1.64,0,0,0,.437-1.415Z" fill="#1d1b1a" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path d="M46,0H2A2,2,0,0,0,0,2V46a2,2,0,0,0,2,2H46a2,2,0,0,0,2-2V2A2,2,0,0,0,46,0ZM39.877,11.373,37.3,13.841a.752.752,0,0,0-.286.722V32.7a.753.753,0,0,0,.286.722l2.514,2.468v.542H27.171v-.542l2.6-2.528c.256-.256.256-.331.256-.722V17.979L22.79,36.371h-.979l-8.43-18.391V30.305a1.7,1.7,0,0,0,.467,1.415l3.387,4.109v.542h-9.6v-.542l3.387-4.109a1.64,1.64,0,0,0,.437-1.415V16.053A1.249,1.249,0,0,0,11.048,15L8.037,11.373v-.542h9.349l7.226,15.848,6.353-15.848h8.912Z" fill="currentColor" />
			</g>
		);
	}
};

Medium.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Medium.defaultProps = {
	type: 'glyph'
};

export default Medium;
