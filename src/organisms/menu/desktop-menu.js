import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Logo, ButtonLink, HiddenText, Nav, SiteTitle } from 'atoms';

const LogoWrapper = styled.div`
	display: none;
	height: 48px;
	${prop => (prop.icon ? `
		@media (max-width: 999px) {
			display: flex;
			width: 50px;
		}
	` : `
		@media (min-width: 1000px) {
			display: flex;
		}
	`)};
`;

const NavWrapper = styled(Nav)`
	@media (max-width: 880px) {
		display: none;
	}
`;

/* eslint-disable react/prefer-stateless-function */
export default class DesktopMenu extends Component {
	static propTypes = {
		renderLeftNav: PropTypes.func,
		renderRightNav: PropTypes.func
	}

	static defaultProps = {
		renderLeftNav: () => null,
		renderRightNav: () => null
	}

	render = () => {
		const { renderLeftNav, renderRightNav, ...props } = this.props;
		return (
			<NavWrapper {...props}>
				<div>
					<SiteTitle>
						<ButtonLink to="/" color="white" squared py={0} px={3}>
							<HiddenText>Voice Computer</HiddenText>
							<LogoWrapper>
								<Logo type="landscape" aria-hidden color="white" height="49px" />
							</LogoWrapper>
							<LogoWrapper icon>
								<Logo type="icon" aria-hidden color="white" height="51px" />
							</LogoWrapper>

						</ButtonLink>
					</SiteTitle>
					{renderLeftNav()}
				</div>
				<div>
					{renderRightNav()}
				</div>
			</NavWrapper>
		);
	}
}
