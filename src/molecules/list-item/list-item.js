import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sys from 'system-components';
import { ArrowButton, ArrowButtonLink, Box, Header, Title, Subtitle } from 'atoms';

const Image = sys({
	is: 'img',
	width: '100px',
	height: '100px',
	borderRadius: '50%'
});

const ListBox = styled(Box)`
	list-style-type: none;
`;

export default class ListItem extends Component {
	static propTypes = {
		onClick: PropTypes.func,
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string
		}),
		imageAttributes: PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string
		})
	}

	static defaultProps = {
		buttonAttributes: { text: null },
		imageAttributes: {}
	}

	renderImage = ({ imageAttributes }) => (
		<Image {...imageAttributes} />
	)

	renderButton = ({ text, ...buttonProps }) => {
		const buttonAttrs = Object.assign({}, {
			nostyle: true
		}, buttonProps);

		return buttonProps.onClick ?
			<ArrowButton {...buttonAttrs}>{text}</ArrowButton> :
			<ArrowButtonLink {...buttonAttrs}>{text}</ArrowButtonLink>
	}

	render = () => {
		const {
			buttonAttributes, title, subtitle, children, imageAttributes, ...props
		} = this.props;
		return (
			<ListBox is="li" {...props}>
				{imageAttributes.src && this.renderImage(this.props)}
				<Header mb={1}>
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</Header>
				<Box fontSize={1} mt={-1}>
					{children}
				</Box>
				<Box mt={1}>
					{buttonAttributes.text && this.renderButton(buttonAttributes)}
				</Box>
			</ListBox>
		);
	}
}
