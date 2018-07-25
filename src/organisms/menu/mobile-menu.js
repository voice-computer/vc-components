import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import { Nav, Box, Logo, SiteTitle, ButtonLink, Button, Icon, ArrowButtonLink } from 'atoms';

const LogoWrapper = styled.div`
	height: 48px;
`;

const NavWrapper = styled.div`
	height: calc(100vh - 113px);
	width: 100%;
	overflow: hidden;
	${color};
	${space};
`;

const Container = styled.div`
	position: sticky;
	top: 0;
	display: none;
	z-index: 900;

	@media (max-width: 880px) {
		display: block;
	}
`;

export default class MobileMenu extends Component {
	static propTypes = {
		cta: PropTypes.bool,
		className: PropTypes.string,
		renderMenu: PropTypes.func.isRequired
	}

	static defaultProps = {
		cta: false,
		className: ''
	}

	state = { expanded: this.props.isOpen }

	toggleMenu = () => {
		this.setState(({ expanded }) => {
			if (window !== 'undefined') {
				const body = document.getElementsByTagName('body')[0];
				if (!expanded) body.classList.add('no-scroll');
				else body.classList.remove('no-scroll');
			}
			return ({ expanded: !expanded });
		});
	}

	dismissMenu = () => {
		const body = document.getElementsByTagName('body')[0];
		body.classList.remove('no-scroll');
		this.setState({ expanded: false });
	}

	renderMenuIcon = () => (
		<Icon
			name={this.state.expanded ? 'close' : 'menu'}
			type="outline"
			ml={3}
		/>
	)

	renderNavMenu = () => (
		<Box bg="rgba(256, 256, 256, .95)">
			<NavWrapper>
				{this.props.cta && this.renderCTA()}
				{this.props.renderMenu(this.dismissMenu)}
			</NavWrapper>
		</Box>
	)

	renderCTA = () => (
		<ArrowButtonLink
			onClick={this.dismissMenu}
			justifyContent="flex-start"
			to="/sign-up"
			type="secondary"
			width="100%"
			py={2}
		>
			Try Voice Computer
		</ArrowButtonLink>
	)

	render = () => (
		<Container className={this.props.className}>
			<Nav bg="white">
				<div>
					<SiteTitle>
						<ButtonLink to="/" color="white" squared py="0" px={3} height="100%">
							<LogoWrapper>
								<Logo height="100%" type="landscape" color="white" />
							</LogoWrapper>
						</ButtonLink>
					</SiteTitle>
				</div>
				<div>
					<Button nostyle px="12px !important;" onClick={this.toggleMenu}>
						Menu
						{this.renderMenuIcon()}
					</Button>
				</div>
			</Nav>
			{this.state.expanded && this.renderNavMenu()}
		</Container>
	)
}
