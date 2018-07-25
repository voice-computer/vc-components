import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { ClearIndicator, DropdownIndicator, MultiValueRemove } from './select-custom';

const styles = gray => ({
	control: base => ({
		...base,
		background: gray ? '#eeeff1' : 'white',
		borderRadius: 0,
		color: '#4d586f',
		outline: 0,
		boxShadow: 'none',
		borderColor: gray ? '#eeeff1' : '#4d586f'
	}),
	container: base => ({
		...base,
		outline: 0,
		borderColor: gray ? '#eeeff1' : '#4d586f'
	}),
	multiValue: base => ({
		...base,
		fontSize: '95%',
		lineHeight: 1,
		padding: '8px',
		background: '#eeeff1'
	}),
	multiValueLabel: base => ({
		...base,
		fontSize: '95%',
		color: '#4d586f'
	}),
	input: base => ({
		...base,
		color: '#4d586f'
	}),
	multiValueRemove: (base, state) => ({
		...base,
		background: state.isHovered ? '#f7f7f7' : 'transparent'
	})
});

const Select = ({ options, gray, ...attrs }) => (
	<ReactSelect
		styles={styles(gray)}
		components={{ ClearIndicator, DropdownIndicator, MultiValueRemove }}
		options={options}
		{...attrs}
	/>
);

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	})).isRequired,
	gray: PropTypes.bool
};

Select.defaultProps = {
	gray: false
};

export default Select;
