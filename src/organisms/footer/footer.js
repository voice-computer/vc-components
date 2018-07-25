import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sys from 'system-components';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';
import { Box, HiddenText, Logo } from 'atoms';
import { Section, InlineForm } from 'molecules';
import { fontSize } from 'utils';

const ImageLink = styled(Link)`
	outline: none;
	text-decoration: none;
`;

const FooterLinkContainer = sys({
	mx: [-3, -2],
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
});

const linkStyles = css`
	padding-bottom: 4px;
	color: white;
	font-weight: 500;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const FooterLink = styled(Link)`${linkStyles}`;
const FooterExternalLink = styled.a`${linkStyles}`;

const makeFooterTitle = sys({
	color: 'white',
	m: 0,
	is: 'h2',
	mb: 2,
	fontWeight: 700,
	letterSpacing: '.03rem'
});

const FooterTitle = styled(makeFooterTitle).attrs({
	fontSize: [0, 1]
})`
	text-transform: uppercase;
	${fontSize};
`;

export default class Footer extends Component {
	static propTypes = {
		newsLetter: PropTypes.shape({
			title: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired
		}),
		renderLegal: PropTypes.func,
		links: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			links: PropTypes.arrayOf(PropTypes.shape({
				to: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired
			}))
		})),
		title: PropTypes.string.isRequired
	}

	static defaultProps = {
		newsLetter: {},
		renderLegal: null,
		links: null
	}

	renderSocial = ({ title }) => (
		<Box is="header" flex="1" m={[3, 2]} maxWidth="300px" minWidth="150px">
			<h1>
				<ImageLink to="/">
					<HiddenText>{title}</HiddenText>
					<Logo type="icon" aria-hidden color="white" width="100px" />
				</ImageLink>
			</h1>
		</Box>
	)

	renderLink = ({ to, text, ...props }) => (
		to ?
			<FooterLink {...props} to={to}>{text}</FooterLink> :
			<FooterExternalLink {...props}>{text}</FooterExternalLink>
	);

	renderLinkSection = ({ title, links }) => (
		<Box key={title.split(' ').join('-')} is="section" my={3} mx={[3, 2]}>
			<FooterTitle>{title}</FooterTitle>
			<Box display="flex" flexDirection="column" flexWrap="nowrap">
				{links.map(this.renderLink)}
			</Box>
		</Box>
	)

	renderNewsLetter = ({ title, message, ...props }) => (
		<Box is="section" pt={4}>
			<FooterTitle mb={0}>{title}</FooterTitle>
			<Box pb={3}>{message}</Box>
			<InlineForm {...props} />
		</Box>
	)

	render = () => {
		const hasNewsLetter = Boolean(Object.keys(this.props.newsLetter).length);
		const hasFooterLinks = Boolean(this.props.links && this.props.links.length);

		return (
			<Section is="footer" bg="neutral.5" color="white" py={[5, 6]} px={[4, 5, 6]}>
				<Box display="flex" flexWrap="wrap" alignItems="flex-start">
					{this.renderSocial(this.props)}
					<Box is="div" flex="2 800px" m={[3, 2]}>
						{hasFooterLinks && (
							<FooterLinkContainer>
								{this.props.links.map(this.renderLinkSection)}
							</FooterLinkContainer>
						)}
						{hasNewsLetter && this.renderNewsLetter(this.props.newsLetter)}
						{this.props.renderLegal && (
							<Box mt={5}>
								{this.props.renderLegal()}
							</Box>
						)}
					</Box>
				</Box>
			</Section>
		);
	}
}
