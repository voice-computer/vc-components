import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'atoms';

const iconStyles = css`
	box-sizing: content-box;
	overflow: visible !important;
`;

const ClearIcon = styled(Icon).attrs({
	p: 2,
	mx: 2,
	my: 1,
	display: 'flex',
	color: 'neutral.2',
	borderRadius: '100%',
	hover: {
		bg: 'neutral.3',
		color: 'neutral.4'
	}
})`
	${iconStyles};
`;

const MultiValueIcon = styled(Icon)`${iconStyles}`;

/* eslint-disable */

export const ClearIndicator = ({ innerProps: { ref, ...restInnerProps } }) => (
	<div {...restInnerProps} ref={ref}>
		<ClearIcon name="close" iconSize="sm" />
	</div>
);

export const DropdownIndicator = ({
	innerProps: { ref, ...restInnerProps }, selectProps: { menuIsOpen }
}) => (
	<div {...restInnerProps} ref={ref}>
		<Icon
			iconSize="sm"
			height="25px"
			width="19px"
			p="8px 15px"
			alignToText
			color="neutral.4"
			rotate={menuIsOpen ? '180deg' : '0deg'}
			name="chevron"
		/>
	</div>
);

export const MultiValueRemove = ({ innerRefs, ...props }) => (
	<div ref={innerRef} {...props}>
		<MultiValueIcon name="close" iconSize="xs" />
	</div>
);
