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
`;

export default class MobileMenu extends Component {
	static propTypes = {
		cta: PropTypes.bool,
		renderMenu: PropTypes.func.isRequired
	}

	static defaultProps = {
		cta: false
	}

	state = { expanded: true }

	toggleMenu = () => this.setState(({ expanded }) => ({ expanded: !expanded }))

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
				{this.props.renderMenu()}
			</NavWrapper>
		</Box>
	)

	renderCTA = () => (
		<ArrowButtonLink justifyContent="flex-start" to="/sign-up" type="secondary" width="100%" py={2}>
			Try Voice Computer
		</ArrowButtonLink>
	)

	render = () => (
		<Container>
			<Nav bg="white">
				<div>
					<SiteTitle>
						<ButtonLink to="/" color="white" squared py="0" px={3} height="33px">
							<LogoWrapper>
								<Logo type="landscape" color="white" />
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
