import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Switch from 'react-toggle';
import { HiddenText, Box } from 'atoms';
import Label from './label';

const Container = styled(Box)`
	flex-direction: row;
	@media (max-width: 350px) {
		flex-direction: column;
	}
`;

export default class Toggle extends Component {
	static propTypes = {
		isChecked: PropTypes.bool,
		onColor: PropTypes.string,
		offColor: PropTypes.string,
		handleChange: PropTypes.func,
		onState: PropTypes.shape({
			value: PropTypes.string,
			render: PropTypes.func,
			label: PropTypes.string
		}).isRequired,
		offState: PropTypes.shape({
			value: PropTypes.string,
			render: PropTypes.func,
			label: PropTypes.string
		}).isRequired
	}

	static defaultProps = {
		isChecked: false,
		onColor: 'neutral.5',
		offColor: 'nuetral.3',
		handleChange: () => {}
	}

	state = { isChecked: this.props.isChecked }

	toggleStatus = () => {
		this.setState(({ isChecked }) => {
			this.props.handleChange(!isChecked);
			return ({ isChecked: !isChecked });
		});
	};

	makeSetStatus = value => () => {
		this.props.handleChange(value);
		this.setState({ isChecked: value });
	}

	render = () => {
		const {
			onState, offState, onColor, offColor, ...props
		} = this.props;
		const { isChecked } = this.state;

		return (
			<Container
				{...props}
				display="inline-flex"
				alignItems="center"
				justifyContent={['center', 'space-between']}
				flexWrap="wrap"
			>
				<Label
					mx={3}
					flexDirection="row"
					flexWrap="wrap"
					alignItems="center"
					display="flex"
					color={isChecked ? offColor : onColor}
				>
					{offState.render && offState.render()}
					{offState.label}
					<HiddenText>
						<input
							type="checkbox"
							value={offState.value}
							name={offState.value}
							checked={!isChecked}
							onChange={this.makeSetStatus(false)}
						/>
					</HiddenText>
				</Label>
				<Switch
					style={{ margin: '4px 0' }}
					checked={isChecked}
					onChange={this.toggleStatus}
					icons={false}
				/>
				<Label
					mx={3}
					flexDirection="row"
					flexWrap="wrap"
					alignItems="center"
					display="flex"
					color={isChecked ? onColor : offColor}
				>
					{onState.label}
					<HiddenText>
						<input
							type="checkbox"
							value={onState.value}
							name={onState.value}
							checked={!isChecked}
							onChange={this.makeSetStatus(true)}
						/>
					</HiddenText>
					{onState.render && onState.render()}
				</Label>
			</Container>
		);
	}
}
