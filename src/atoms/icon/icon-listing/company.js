import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path fill="#444444" d="M24,7c-0.55273,0-1-0.44727-1-1V2c0-0.55273,0.44727-1,1-1s1,0.44727,1,1v4C25,6.55273,24.55273,7,24,7z" />
				<path fill="#E6E6E6" d="M32,11h-3V6c0-0.55273-0.44727-1-1-1h-8c-0.55273,0-1,0.44727-1,1v5h-3c-0.55273,0-1,0.44727-1,1v34 c0,0.55273,0.44727,1,1,1h16c0.55273,0,1-0.44727,1-1V12C33,11.44727,32.55273,11,32,11z" />
				<path fill="#B3B3B3" d="M20,27H4c-0.55273,0-1,0.44727-1,1v18c0,0.55273,0.44727,1,1,1h16c0.55273,0,1-0.44727,1-1V28 C21,27.44727,20.55273,27,20,27z" />
				<path fill="#444444" d="M44,21H28c-0.55273,0-1,0.44727-1,1v24c0,0.55273,0.44727,1,1,1h16c0.55273,0,1-0.44727,1-1V22 C45,21.44727,44.55273,21,44,21z" />
				<path fill="#B3B3B3" d="M37,40h-2c-0.55228,0-1,0.44772-1,1v6h4v-6C38,40.44772,37.55228,40,37,40z" />
				<path fill="#E6E6E6" d="M13,41h-2c-0.55229,0-1,0.44772-1,1v5h4v-5C14,41.44772,13.55229,41,13,41z" />
				<path fill="#BADEFC" d="M34,29h-2c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h2c0.55228,0,1,0.44772,1,1v2 C35,28.55228,34.55228,29,34,29z" />
				<path fill="#BADEFC" d="M40,29h-2c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h2c0.55228,0,1,0.44772,1,1v2 C41,28.55228,40.55228,29,40,29z" />
				<path fill="#BADEFC" d="M34,35h-2c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h2c0.55228,0,1,0.44772,1,1v2 C35,34.55228,34.55228,35,34,35z" />
				<path fill="#BADEFC" d="M40,35h-2c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h2c0.55228,0,1,0.44772,1,1v2 C41,34.55228,40.55228,35,40,35z" />
				<path fill="#FFFFFF" d="M10,36H8c-0.55228,0-1-0.44772-1-1v-2c0-0.55228,0.44772-1,1-1h2c0.55229,0,1,0.44772,1,1v2 C11,35.55228,10.55229,36,10,36z" />
				<path fill="#FFFFFF" d="M16,36h-2c-0.55229,0-1-0.44772-1-1v-2c0-0.55228,0.44771-1,1-1h2c0.55228,0,1,0.44772,1,1v2 C17,35.55228,16.55228,36,16,36z" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor">
				<polyline data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" points=" 36,17 36,6 12,6 12,23 " strokeLinejoin="miter" />
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="18" y1="46" x2="30" y2="46" strokeLinejoin="miter" />
				<line data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="24" y1="2" x2="24" y2="6" strokeLinejoin="miter" />
				<rect x="2" y="28" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" width="16" height="18" strokeLinejoin="miter" />
				<rect x="30" y="22" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" width="16" height="24" strokeLinejoin="miter" />
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="36" y1="28" x2="40" y2="28" strokeLinejoin="miter" />
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="36" y1="34" x2="40" y2="34" strokeLinejoin="miter" />
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="36" y1="40" x2="40" y2="40" strokeLinejoin="miter" />
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="8" y1="34" x2="12" y2="34" strokeLinejoin="miter" />
				<line data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="21" y1="14" x2="27" y2="14" strokeLinejoin="miter" />
				<line fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" x1="8" y1="40" x2="12" y2="40" strokeLinejoin="miter" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path fill="currentColor" d="M46,21H30c-0.553,0-1,0.447-1,1v24c0,0.553,0.447,1,1,1h16c0.553,0,1-0.447,1-1V22 C47,21.447,46.553,21,46,21z M41,41h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S41.553,41,41,41z M41,35h-6 c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S41.553,35,41,35z M41,29h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h6 c0.553,0,1,0.447,1,1S41.553,29,41,29z" />
				<path data-color="color-2" fill="currentColor" d="M36,5H25V2c0-0.553-0.447-1-1-1s-1,0.447-1,1v3H12c-0.552,0-1,0.448-1,1v19h8 c1.105,0,2,0.895,2,2v20h6V21c0-1.105,0.895-2,2-2h8V6C37,5.448,36.552,5,36,5z M28,15h-8c-0.553,0-1-0.447-1-1s0.447-1,1-1h8 c0.553,0,1,0.447,1,1S28.553,15,28,15z" />
				<path fill="currentColor" d="M18,27H2c-0.553,0-1,0.447-1,1v18c0,0.553,0.447,1,1,1h16c0.553,0,1-0.447,1-1V28C19,27.447,18.553,27,18,27 z M13,41H7c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,1,0.447,1,1S13.553,41,13,41z M13,35H7c-0.553,0-1-0.447-1-1s0.447-1,1-1h6 c0.553,0,1,0.447,1,1S13.553,35,13,35z" />
			</g>
		);
	}
};

Company.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Company.defaultProps = {
	type: 'glyph'
};

export default Company;
