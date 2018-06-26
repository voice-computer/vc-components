import React from 'react';
import PropTypes from 'prop-types';

const People = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path fill="#444444" d="M45,45H3c-1.105,0-2-0.895-2-2V11c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v32C47,44.105,46.105,45,45,45 z" />
				<path fill="#848484" d="M40,40H8c-0.552,0-1-0.448-1-1V15c0-0.552,0.448-1,1-1h32c0.552,0,1,0.448,1,1v24C41,39.552,40.552,40,40,40 z" />
				<path fill="#C6C6C6" d="M42.585,3.189C42.322,3,41.987,2.95,41.684,3.051L24,8.946V39c0.106,0,0.213-0.017,0.316-0.051l18-6 C42.725,32.812,43,32.431,43,32V4C43,3.679,42.846,3.377,42.585,3.189z" />
				<path fill="#E6E6E6" d="M24,8.946L6.316,3.051C6.011,2.95,5.676,3,5.415,3.189C5.154,3.377,5,3.679,5,4v28 c0,0.431,0.275,0.812,0.684,0.949l18,6C23.787,38.983,23.894,39,24,39V8.946z" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor">
				<polyline data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points=" 46,10 46,44 2,44 2,10 " strokeLinejoin="miter" />
				<line data-cap="butt" fill="none" stroke="currentColor" strokeMiterlimit="10" x1="24" y1="10" x2="24" y2="38" strokeLinejoin="miter" strokeLinecap="butt" />
				<polygon fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points="7,4 24,10 41,4 41,32 24,38 7,32 " strokeLinejoin="miter" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path data-color="color-2" fill="currentColor" d="M46,9h-2v23c0,1.269-0.804,2.406-2.001,2.829l-17,6C24.679,40.942,24.343,41,24,41 s-0.679-0.058-1.001-0.172l-16.998-6C4.804,34.406,4,33.269,4,32V9H2c-0.553,0-1,0.448-1,1v34c0,0.552,0.447,1,1,1h44 c0.553,0,1-0.448,1-1V10C47,9.448,46.553,9,46,9z" />
				<path fill="currentColor" d="M23,8.587L7.333,3.057c-0.306-0.109-0.645-0.062-0.91,0.126C6.157,3.371,6,3.675,6,4v28 c0,0.424,0.268,0.802,0.667,0.943L23,38.707V8.587z" />
				<path fill="currentColor" d="M41.577,3.184c-0.265-0.188-0.605-0.236-0.91-0.126L25,8.587v30.121l16.333-5.765 C41.732,32.802,42,32.424,42,32V4C42,3.675,41.843,3.371,41.577,3.184z" />
			</g>
		);
	}
};

People.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

People.defaultProps = {
	type: 'glyph'
};

export default People;
