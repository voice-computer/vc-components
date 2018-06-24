import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableSection, TableContainer, Icon } from 'atoms';

export default class Table extends Component {
	static propTypes = {
		headerCells: PropTypes.arrayOf(PropTypes.shape({
			text: PropTypes.string
		})).isRequired,
		bodyCells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
			text: PropTypes.string,
			iconAttributes: {
				name: PropTypes.string
			}
		}))).isRequired
	}

	renderCell = ({ text, iconAttributes, cellAttributes }, i) => (
		<TableCell key={i} is="td" {...cellAttributes}>
			{text || <Icon {...iconAttributes} />}
		</TableCell>
	);

	renderHeaderCell = ({ text, cellAttributes }, i) => (
		<TableCell key={i} is="th" {...cellAttributes}>{text}</TableCell>
	);

	render = () => {
		const { headerCells, bodyCells, ...props } = this.props;
		return (
			<TableContainer {...props} cellspacing="0" cellpadding="0">
				<TableSection is="thead" bg="neutral.1">
					<tr>{headerCells.map(this.renderHeaderCell)}</tr>
				</TableSection>
				<TableSection is="tbody">
					{bodyCells.map((row, i) => (
						<tr key={i}>{row.map(this.renderCell)}</tr>
					))}
				</TableSection>
			</TableContainer>
		);
	}
}
