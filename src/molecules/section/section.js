import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle, SectionText } from 'atoms';

const Section = ({
	titleAttributes,
	subtitleAttributes,
	textAttributes,
	renderFooter,
	center,
	...props
}) => {
	const { text: titleText, ...titleProps } = titleAttributes;
	const { text: textContent, ...textProps } = textAttributes;
	const { text: subtitleText, ...subtitleProps } = subtitleAttributes;

	const renderSectionHeader = Boolean(subtitleText || titleText);

	return (
		<SectionContainer {...props}>
			{renderSectionHeader && (
				<header>
					{titleText && <SectionTitle {...titleProps}>{titleText}</SectionTitle>}
					{subtitleText && <SectionTitle {...subtitleProps}>{subtitleText}</SectionTitle>}
				</header>
			)}
			{textContent && textContent.map(text => (
				<SectionText {...textProps}>{text}</SectionText>
			))}
			{renderFooter && renderFooter()}
		</SectionContainer>
	);
};

Section.propTypes = {
	titleAttributes: PropTypes.shape({
		text: PropTypes.string
	}),
	textAttributes: PropTypes.shape({
		text: PropTypes.string
	}),
	subtitleAttributes: PropTypes.shape({
		text: PropTypes.string
	}),
	renderFooter: PropTypes.func,
	headerDivider: PropTypes.string,
	center: PropTypes.bool
};

Section.defaultProps = {
	titleAttributes: {
		text: null,
		is: 'h3',
		fontSize: 2
	},
	textAttributes: {
		text: null
	},
	renderFooter: null,
	subtitleAttributes: {
		text: null,
		is: 'h4',
		fontSize: 1
	},
	headerDivider: null,
	center: false
};

export default Section;
