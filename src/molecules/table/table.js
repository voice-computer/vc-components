import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableSection, TableContainer, Icon, ArrowButton, ArrowButtonLink } from 'atoms';

export default class Table extends Component {
	static propTypes = {
		buttonAttributes: PropTypes.shape({
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func
		}),
		headerCells: PropTypes.arrayOf(PropTypes.shape({
			text: PropTypes.string
		})).isRequired,
		bodyCells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
			text: PropTypes.string,
			render: PropTypes.func,
			iconAttributes: {
				name: PropTypes.string
			}
		}))).isRequired
	}

	static defaultProps = {
		buttonAttributes: {}
	}

	renderCell = ({
		text, render, iconAttributes, cellAttributes
	}, i) => (
		<TableCell key={i} is="td" {...cellAttributes}>
			{render ? render() : text || <Icon {...iconAttributes} />}
		</TableCell>
	);

	renderHeaderCell = ({ text, cellAttributes }, i) => (
		<TableCell key={i} is="th" py={4} {...cellAttributes}>{text}</TableCell>
	);

	renderButton = ({ text, onClick, ...props }) => (
		onClick ? (
			<ArrowButton type="secondary" width="100%" onClick={onClick} {...props}>
				{text}
			</ArrowButton>
		) : (
			<ArrowButtonLink type="secondary" width="100%" {...props}>
				{text}
			</ArrowButtonLink>
		)
	)

	render = () => {
		const {
			headerCells, bodyCells, buttonAttributes, ...props
		} = this.props;
		return (
			<TableContainer {...props} cellspacing="0" cellpadding="0">
				<TableSection is="thead" bg="neutral.1">
					<tr>{headerCells.map(this.renderHeaderCell)}</tr>
				</TableSection>
				<TableSection is="tbody">
					{bodyCells.map((row, i) => (
						<tr key={i}>{row.map(this.renderCell)}</tr> // eslint-disable-line
					))}
				</TableSection>
				{
					buttonAttributes.text && (
						<tr>
							<td colSpan={headerCells.length}>
								{ this.renderButton(buttonAttributes)}
							</td>
						</tr>
					)
				}
			</TableContainer>
		);
	}
}
