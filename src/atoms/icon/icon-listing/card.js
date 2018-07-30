import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<path d="M44,41H4c-1.657,0-3-1.343-3-3V10c0-1.657,1.343-3,3-3h40c1.657,0,3,1.343,3,3v28C47,39.657,45.657,41,44,41 z" fill="#BFDEE0" />
				<rect height="8" width="46" fill="#223E49" x="1" y="13" />
				<rect height="4" width="22" fill="#FFFFFF" x="7" y="27" />
			</g>
		);
	case 'outline':
		return (
			<g stroke="currentColor" strokeLinecap="square">
				<line fill="none" x1="2" x2="46" y1="16" y2="16" />
				<line fill="none" x1="2" x2="46" y1="24" y2="24" />
				<path d="M43,40H5c-1.7,0-3-1.3-3-3 V11c0-1.7,1.3-3,3-3h27h11c1.7,0,3,1.3,3,3v26C46,38.7,44.7,40,43,40z" fill="none" stroke="currentColor" />
				<line fill="none" x1="10" x2="20" y1="32" y2="32" />
				<line fill="none" x1="35" x2="38" y1="32" y2="32" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<path d="M47,16V9c0-1.105-0.895-2-2-2H3C1.895,7,1,7.895,1,9v7H47z" />
				<path d="M1,22v17c0,1.105,0.895,2,2,2h42c1.105,0,2-0.895,2-2V22H1z M18,33H8c-0.552,0-1-0.448-1-1s0.448-1,1-1h10 c0.552,0,1,0.448,1,1S18.552,33,18,33z M40,33h-5c-0.552,0-1-0.448-1-1s0.448-1,1-1h5c0.552,0,1,0.448,1,1S40.552,33,40,33z" fill="currentColor" />
			</g>
		);
	}
};

Card.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline'])
};

Card.defaultProps = {
	type: 'glyph'
};

export default Card;
