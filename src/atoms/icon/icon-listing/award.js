import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path d="M37,1H5C3.89543,1,3,1.89543,3,3v36c0,1.10457,0.89543,2,2,2h32c1.10457,0,2-0.89543,2-2V3 C39,1.89543,38.10457,1,37,1z" fill="#E6E6E6" />
				<polygon fill="#EFD358" points="44,29.2501 44,46 38,43 32,46 32,29.2501 " />
				<path d="M30,14H12c-0.55273,0-1-0.44775-1-1s0.44727-1,1-1h18c0.55273,0,1,0.44775,1,1S30.55273,14,30,14z" fill="#B3B3B3" />
				<path d="M24,22H12c-0.55273,0-1-0.44775-1-1s0.44727-1,1-1h12c0.55273,0,1,0.44775,1,1S24.55273,22,24,22z" fill="#B3B3B3" />
				<path d="M24,30H12c-0.55273,0-1-0.44775-1-1s0.44727-1,1-1h12c0.55273,0,1,0.44775,1,1S24.55273,30,24,30z" fill="#B3B3B3" />
				<path d="M38,15c-4.96289,0-9,4.0376-9,9s4.03711,9,9,9s9-4.0376,9-9S42.96289,15,38,15z" fill="#E86C60" />
				<circle cx="38" cy="24" fill="#C94949" r="4" />
			</g>
		);
	case 'outline':
		return (
			<g stroke="currentColor" strokeLinecap="square">
				<polyline fill="none" points="25,40 2,40 2,2 37,2 37,16 " stroke="currentColor" />
				<line fill="none" stroke="currentColor" x1="9" x2="26" y1="12" y2="12" />
				<line fill="none" stroke="currentColor" x1="9" x2="20" y1="21" y2="21" />
				<line fill="none" stroke="currentColor" x1="9" x2="20" y1="30" y2="30" />
				<polyline fill="none" points="43,31.708 43,45 37,42 31,45 31,31.708 " strokeLinecap="butt" />
				<circle cx="37" cy="25" fill="none" r="9" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path d="M37,37c-2.614,0-5.027-0.849-7-2.273V46c0,0.347,0.18,0.668,0.475,0.851 s0.662,0.197,0.973,0.044L37,44.118l5.553,2.776C42.694,46.965,42.847,47,43,47c0.183,0,0.365-0.05,0.525-0.149 C43.82,46.668,44,46.347,44,46V34.727C42.027,36.151,39.614,37,37,37z" />
				<path d="M37,15c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S42.514,15,37,15z" />
				<path d="M37,1H2C1.447,1,1,1.448,1,2v38c0,0.552,0.447,1,1,1h26v-8.089c-1.861-2.115-3-4.879-3-7.911 c0-6.617,5.383-12,12-12c0.338,0,0.669,0.023,1,0.051V2C38,1.448,37.553,1,37,1z M18,31H8c-0.553,0-1-0.448-1-1s0.447-1,1-1h10 c0.553,0,1,0.448,1,1S18.553,31,18,31z M18,22H8c-0.553,0-1-0.448-1-1s0.447-1,1-1h10c0.553,0,1,0.448,1,1S18.553,22,18,22z M24,13 H8c-0.553,0-1-0.448-1-1s0.447-1,1-1h16c0.553,0,1,0.448,1,1S24.553,13,24,13z" fill="currentColor" />
			</g>
		);
	}
};

Award.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Award.defaultProps = {
	type: 'glyph'
};

export default Award;
