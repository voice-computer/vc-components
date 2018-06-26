import React from 'react';
import PropTypes from 'prop-types';

const People = ({ type }) => {
	switch (type) {
	case 'colored':
		return (
			<g>
				<circle fill="#9BCED3" cx="39" cy="10" r="5" />
				<circle fill="#9BCED3" cx="9" cy="10" r="5" />
				<path fillRule="evenodd" clipRule="evenodd" fill="#76B5B5" d="M35.9966888,17C33.2370911,17,31,19.2295895,31,22.0038109 v6.7917995c0,0.5547104,0.4171391,1.1712494,0.9327698,1.3774986L34,31l0.9164581,10.9975281 C34.9626007,42.551178,35.4530411,43,35.9970284,43h6.0059433c0.5506401,0,1.0350075-0.455761,1.0805702-1.0024719L44,31 l2.0507812-0.6835899C46.5750198,30.1416607,47,29.5525093,47,29.0014992v-6.9939594C47,19.2419491,44.758419,17,42.0033112,17 H35.9966888z" />
				<path fillRule="evenodd" clipRule="evenodd" fill="#76B5B5" d="M5.996686,17C3.237092,17,1,19.2295895,1,22.0038109v6.7917995 c0,0.5547104,0.4171371,1.1712494,0.9327741,1.3774986L4,31l0.916461,10.9975281C4.9625978,42.551178,5.4530358,43,5.9970298,43 h6.00594c0.5506401,0,1.0350103-0.455761,1.0805702-1.0024719L14,31l2.0507812-0.6835899 C16.5750198,30.1416607,17,29.5525093,17,29.0014992v-6.9939594C17,19.2419491,14.75842,17,12.0033102,17H5.996686z" />
				<circle fill="#5A7A84" cx="24" cy="7" r="6" />
				<path fillRule="evenodd" clipRule="evenodd" fill="#335262" d="M20.0006599,15C16.6865902,15,14,17.6780396,14,21.0033302v8.9958 c0,0.5527592,0.39816,1.1999512,0.8877296,1.4447289L18,33l1.0039997,13.0830002C19.0470009,46.6020012,19.4790001,47,20,47h8 c0.5209999,0,0.9529991-0.3979988,0.9960003-0.9169998l0.941-13.2870026l3.1410408-1.3884583 C33.5872307,31.1824608,34,30.5553703,34,29.9991302v-8.9958C34,17.6877804,31.3234596,15,27.9993401,15H20.0006599z" />
			</g>
		);
	case 'outline':
		return (
			<g fill="currentColor">
				<path data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M9,13L9,13 c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v0C13,11.209,11.209,13,9,13z" strokeLinejoin="miter" />
				<path data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeMiterlimit="10" d="M12,43H6L5,32l-3-1v-9 c0-2.209,1.791-4,4-4h6c1.454,0,2.727,0.777,3.427,1.937" strokeLinejoin="miter" strokeLinecap="butt" />
				<path data-color="color-2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M39,13 L39,13c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h0c-2.209,0-4,1.791-4,4v0C35,11.209,36.791,13,39,13z" strokeLinejoin="miter" />
				<path data-cap="butt" data-color="color-2" fill="none" stroke="currentColor" strokeMiterlimit="10" d="M36,43h6l1-11l3-1v-9 c0-2.209-1.791-4-4-4h-6c-1.454,0-2.727,0.777-3.427,1.937" strokeLinejoin="miter" strokeLinecap="butt" />
				<path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M24,14L24,14 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h0c3.314,0,6,2.686,6,6v0C30,11.314,27.314,14,24,14z" strokeLinejoin="miter" />
				<path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" d="M29,46H19l-1-12l-4-1V23 c0-2.209,1.791-4,4-4h12c2.209,0,4,1.791,4,4v10l-4,1L29,46z" strokeLinejoin="miter" />
			</g>
		);
	default:
		return (
			<g fill="currentColor">
				<circle data-color="color-2" fill="currentColor" cx="9" cy="10" r="5" />
				<circle fill="currentColor" cx="24" cy="8" r="7" />
				<path data-color="color-2" fill="currentColor" d="M13.272,35.911C11.934,35.576,11,34.379,11,33V22c0-1.906,0.768-3.634,2.008-4.898 C12.682,17.035,12.345,17,12,17H6c-2.757,0-5,2.243-5,5v9c0,0.431,0.275,0.812,0.684,0.949l2.38,0.793l0.94,10.349 C5.051,43.605,5.483,44,6,44h6c0.517,0,0.949-0.395,0.996-0.91l0.644-7.088L13.272,35.911z" />
				<circle data-color="color-2" fill="currentColor" cx="39" cy="10" r="5" />
				<path data-color="color-2" fill="currentColor" d="M34.728,35.911C36.066,35.576,37,34.379,37,33V22c0-1.906-0.768-3.634-2.008-4.898 C35.318,17.035,35.655,17,36,17h6c2.757,0,5,2.243,5,5v9c0,0.431-0.275,0.812-0.684,0.949l-2.38,0.793l-0.94,10.349 C42.949,43.605,42.517,44,42,44h-6c-0.517,0-0.949-0.395-0.996-0.91l-0.644-7.088L34.728,35.911z" />
				<path fill="currentColor" d="M30,17H18c-2.757,0-5,2.243-5,5v11c0,0.459,0.312,0.859,0.757,0.97l3.306,0.826l0.94,11.287 C18.047,46.602,18.48,47,19,47h10c0.52,0,0.953-0.398,0.997-0.917l0.94-11.287l3.306-0.826C34.688,33.859,35,33.459,35,33V22 C35,19.243,32.757,17,30,17z" />
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
