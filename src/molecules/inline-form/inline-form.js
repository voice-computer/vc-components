import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Label, ArrowButton, HiddenText } from 'atoms';

const Form = styled.form`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;

	input {
		margin: 0 !important;
	}
`;

export default class InlineForm extends Component {
	static propTypes = {
		inputAttributes: PropTypes.shape({
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired,
		inputValue: PropTypes.string,
		buttonAttributes: PropTypes.shape({
			type: PropTypes.string,
			text: PropTypes.string.isRequired
		}).isRequired,
		label: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired
	}

	static defaultProps = {
		inputValue: ''
	}

	state = { inputValue: this.props.inputValue }

	handleInput = ({ target }) => this.setState({ inputValue: target.value })

	handleSubmit = (e) => {
		if (e.target.checkValidity()) {
			e.preventDefault();
			this.props.onSubmit(this.state.inputValue);
		}
	}

	render() {
		const { inputAttributes, buttonAttributes, label } = this.props;
		const { text, ...attributes } = buttonAttributes;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Label>
					<HiddenText>{label}</HiddenText>
					<Input
						value={this.state.inputValue}
						onChange={this.handleInput}
						height="100%"
						required
						{...inputAttributes}
					/>
				</Label>
				<ArrowButton squared {...attributes}>
					{text}
				</ArrowButton>
			</Form>
		);
	}
}
