import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { source } from 'react-aim';
import { Dropdown, DropdownButton } from 'atoms';

class DropdownNav extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
		minWidth: PropTypes.string,
		left: PropTypes.string
	}

	static defaultProps = {
		left: null,
		minWidth: null
	}

	state = { displayDropdown: false }

	render = () => {
		const id = this.props.title.toLowerCase().split(' ').join('-');
		const { displayDropdown } = this.state;

		return (
			<li style={{ listStyleType: 'none' }}>
				<DropdownButton
					id={id}
					data-toggle="dropdown"
					aria-haspopup
					aria-expanded={displayDropdown}
				>
					{this.props.title}
				</DropdownButton>
				<div style={{ position: 'relative' }}>
					<Dropdown
						left={this.props.left}
						minWidth={this.props.minWidth}
						display={displayDropdown}
						aria-labelledby={id}
					>
						{this.props.children}
					</Dropdown>
				</div>
			</li>
		);
	}
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayDropdown: true }),
	mouseLeave: (props, component) => component.setState({ displayDropdown: false })
})(DropdownNav);
