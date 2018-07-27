import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LinkWrapper, Box, Header, Title, Subtitle } from 'atoms';
import { ImageContainer, Image } from './shared';

const boxStyles = {
	is: 'div',
	py: 3,
	display: 'grid',
	gridTemplateColumns: '1fr 30%',
	lineHeight: '1.5',
	justifyContent: 'space-between',
	alignItems: 'flex-start'
};

export default class ArticleRow extends Component {
	renderHeader = ({ title, subtitle }) => (
		<Header>
			<Title>{title}</Title>
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
		</Header>
	)

	renderImage

	render = () => {
		const {
			to, description, title, subtitle, imageAttributes, authorName, ...props
		} = this.props;

		return (
			<LinkWrapper to={to}>
				<Box {...boxStyles} {...props}>
					<Box height="100%" mr={[2, 4]} display="flex" flexDirection="column" flexWrap="nowrap" justifyContent="space-between">
						<Box>
							{this.renderHeader({ title, subtitle })}
							{description && (
								<Box fontSize={1} display={['none', 'none', 'block']}>{description}</Box>
							)}
						</Box>
						{authorName && (
							<Box fontSize={1} fontWeight={500}>{authorName}</Box>
						)}
					</Box>
					<ImageContainer>
						<Image {...imageAttributes} />
					</ImageContainer>
				</Box>
			</LinkWrapper>
		);
	}
}
