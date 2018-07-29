import React from 'react';
import PropTypes from 'prop-types';

const Facebook = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path id="White_4_" d="M46,48c1.10457,0,2-0.89543,2-2V2c0-1.10457-0.89543-2-2-2H2C0.89543,0,0,0.89543,0,2v44 c0,1.10457,0.89543,2,2,2H46z" fill="#39579A" />
				<path id="White_2_" d="M25.51917,48V29H19v-7l6.51917,0v-5.17462c0-6.19977,3.78661-9.57566,9.31723-9.57566 c2.64922,0,4.92609,0.19724,5.58964,0.2854v6.47912l-3.83578,0.00174C33.5824,14.01598,33,15.44527,33,17.54265V22h7l-1,7h-6v19 H25.51917z" fill="#FFFFFF" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path d="M46,0H2C0.89543,0,0,0.89543,0,2v44c0,1.10457,0.89543,2,2,2h23.63829V29.4119h-6.25529v-7.24417h6.25529 v-5.34235c0-6.19977,3.78661-9.57566,9.31723-9.57566c2.64922,0,4.92609,0.19724,5.58963,0.2854v6.47912l-3.83577,0.00174 c-3.00786,0-3.59026,1.42929-3.59026,3.52668v4.62507h7.17347l-0.93401,7.24417h-6.23946V48H46c1.10457,0,2-0.89543,2-2V2 C48,0.89543,47.10457,0,46,0z" fill="currentColor" />
			</g>
		);
	}
};

Facebook.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Facebook.defaultProps = {
	type: 'glyph'
};

export default Facebook;
