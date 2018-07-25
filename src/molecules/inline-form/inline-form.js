import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Label, ArrowButton, HiddenText, Box } from 'atoms';
import { fontSize } from 'utils';

const Form = styled.form`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;

	input {
		margin: 0 !important;
	}
`;

const Bx = styled(Box).attrs({
	display: 'flex',
	fontWeight: 600,
	fontSize: props => (props.success ? 2 : 1),
	my: 2,
	is: 'p',
	color: props => `highlight.${props.success ? 'green' : 'red'}`
})`${fontSize}`;

export default class InlineForm extends Component {
	static propTypes = {
		inputAttributes: PropTypes.shape({
			type: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired,
		largeInput: PropTypes.bool,
		inputValue: PropTypes.string,
		buttonAttributes: PropTypes.shape({
			type: PropTypes.string,
			text: PropTypes.string.isRequired
		}).isRequired,
		label: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired,
		successMessage: PropTypes.string
	}

	static defaultProps = {
		inputValue: '',
		largeInput: false,
		successMessage: 'Submitted Successfully'
	}

	state = {
		inputValue: this.props.inputValue,
		submitting: false,
		error: false,
		success: false
	}

	resetStatus = () => this.setState({ success: false, error: false });

	handleInput = ({ target }) => this.setState({ inputValue: target.value })

	handleSubmit = (e) => {
		if (e.target.checkValidity()) {
			e.preventDefault();
			this.setState({ submitting: true });
			this.props.onSubmit(this.state.inputValue)
				.then(() => this.setState({ submitting: false, success: true }))
				.catch(() => this.setState({ submitting: false, error: true }));
		}
	}

	renderMessage = success => (success ? (
		<Bx success={success} flexWrap="nowrap" alignItems="center">
			<Bx success={success} mr={3} aria-hidden aria-label="raised hands" role="img" is="span">&#x1F64C;</Bx> {/*eslint-disable-line*/}
			{this.props.successMessage}
			<Bx success={success} ml={3} aria-hidden aria-label="raised hands" role="img" is="span">&#x1F64C;</Bx> {/*eslint-disable-line*/}
		</Bx>
	) : (
		<Bx success={success} flexWrap="nowrap" alignItems="center">
			<Bx mr={3} aria-hidden role="img" is="span" aria-label="Sad face">&#x1F614;</Bx> {/*eslint-disable-line*/}
			Something went wrong, please try again.
		</Bx>
	));

	render() {
		const {
			inputAttributes, buttonAttributes, label
		} = this.props;
		const { error, success } = this.state;
		const { text, ...attributes } = buttonAttributes;
		if (success) return this.renderMessage(true);
		return (
			<React.Fragment>
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
					<ArrowButton squared spin={this.state.submitting} {...attributes}>
						{text}
					</ArrowButton>
				</Form>
				{error && this.renderMessage(false)}
			</React.Fragment>
		);
	}
}
