import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { source } from 'react-aim';
import { Dropdown, DropdownButton } from 'atoms';

class DropdownNav extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired
	}

	state = { displayDropdown: false }

	render = () => (
		<li style={{ listStyleType: 'none' }}>
			<DropdownButton>{this.props.title}</DropdownButton>
			<div style={{ position: 'relative' }}>
				{this.state.displayDropdown && (
					<Dropdown
						display={this.state.displayDropdown}
					>
						{this.props.children}
					</Dropdown>
				)}
			</div>
		</li>
	)
}

export default source({
	mouseEnter: (props, component) => component.setState({ displayDropdown: true }),
	mouseLeave: (props, component) => component.setState({ displayDropdown: false })
})(DropdownNav);
