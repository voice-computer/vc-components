import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle, Divider } from 'atoms';

const Section = ({
	titleAttributes,
	subtitleAttributes,
	renderFooter,
	center,
	children,
	headerDivider,
	...props
}) => {
	const { text: titleText, ...titleProps } = titleAttributes;
	const { text: subtitleText, ...subtitleProps } = subtitleAttributes;

	const renderSectionHeader = Boolean(subtitleText || titleText);

	return (
		<SectionContainer {...props}>
			{renderSectionHeader && (
				<header>
					{titleText && <SectionTitle fontWeight={700} {...titleProps}>{titleText}</SectionTitle>}
					{subtitleText && <SectionTitle {...subtitleProps}>{subtitleText}</SectionTitle>}
				</header>
			)}
			<div>
				{headerDivider && <Divider type={headerDivider} my={5} />}
				{children && children}
				{renderFooter && renderFooter()}
			</div>
		</SectionContainer>
	);
};

Section.propTypes = {
	titleAttributes: PropTypes.shape({
		text: PropTypes.string
	}),
	subtitleAttributes: PropTypes.shape({
		text: PropTypes.string
	}),
	renderFooter: PropTypes.func,
	headerDivider: PropTypes.string,
	center: PropTypes.bool,
	children: PropTypes.node
};

Section.defaultProps = {
	titleAttributes: {
		text: null,
		is: 'h3',
		fontSize: 2
	},
	renderFooter: null,
	subtitleAttributes: {
		text: null,
		is: 'h4',
		fontSize: 1
	},
	headerDivider: null,
	center: false,
	children: null
};

export default Section;
