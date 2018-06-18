import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logo, ButtonLink, HiddenText, Nav, SiteTitle } from 'atoms';

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
			<Nav {...props}>
				<div>
					<SiteTitle>
						<ButtonLink to="/" color="white" squared py={0} px={3}>
							<HiddenText>Voice Computer</HiddenText>
							<Logo type="landscape" aria-hidden color="white" display={['none', 'none', 'block']} />
							<Logo type="icon" aria-hidden color="white" display={['none', 'block', 'none']} />
						</ButtonLink>
					</SiteTitle>
					{renderLeftNav()}
				</div>
				<div>
					{renderRightNav()}
				</div>
			</Nav>
		);
	}
}
