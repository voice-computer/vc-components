import React from 'react';
import PropTypes from 'prop-types';

const Phone = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path fill="#444444" d="M32,21v-5c0-0.55231-0.44769-1-1-1h-2c-0.55225,0-1,0.44769-1,1v3h-8v-3c0-0.55231-0.44769-1-1-1h-2 c-0.55225,0-1,0.44769-1,1v5L3,35h42L32,21z" />
				<path fill="#565656" d="M5,43h38c1.10461,0,2-0.89545,2-2v-6H3v6C3,42.10455,3.89545,43,5,43z" />
				<ellipse fill="#E6E6E6" cx="24" cy="28" rx="7" ry="4" />
				<path fill="#444444" d="M7.99999,5C4.68629,5,2,7.68629,2,10.99999V11v4c0,1.10457,0.89543,2,2,2h7c1.10457,0,2-0.89543,2-2v-5h22v5 c0,1.10457,0.89543,2,2,2h7c1.10457,0,2-0.89543,2-2v-4v-0.00001C46,7.68629,43.31371,5,40.00001,5H7.99999z" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor">
				<polygon fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points="44,35 32,21 16,21 4,35 4,45 44,45 " strokeLinejoin="miter" />
				<path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M34,3H14H8 C4.686,3,2,5.686,2,9v0v6h12V9h20v6h12V9v0c0-3.314-2.686-6-6-6H34z" strokeLinejoin="miter" />
				<circle data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="33" r="6" strokeLinejoin="miter" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path data-color="color-2" fill="currentColor" d="M40,4H8c-3.866,0-7,3.134-7,7v4c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2v-4h18v4 c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2v-4C47,7.134,43.866,4,40,4z" />
				<path fill="currentColor" d="M44.759,33.35l-12-14C32.569,19.128,32.292,19,32,19H16c-0.292,0-0.569,0.128-0.759,0.35l-12,14 C3.085,33.53,3,33.762,3,34v10c0,0.553,0.447,1,1,1h40c0.553,0,1-0.447,1-1V34C45,33.762,44.915,33.53,44.759,33.35z M24,39 c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7S27.859,39,24,39z" />
			</g>
		);
	}
};

Phone.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Phone.defaultProps = {
	type: 'glyph'
};

export default Phone;
