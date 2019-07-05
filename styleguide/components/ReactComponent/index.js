import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'rsg-components/Pathline';

const styles = ({ color, fontSize, space }) => ({
	root: {
		marginBottom: space[6],
	},
	header: {
		marginBottom: space[3],
	},
	tabs: {
		marginBottom: space[3],
	},
	tabButtons: {
		marginBottom: space[1],
	},
	tabBody: {
		overflowX: 'auto',
		maxWidth: '100%',
		WebkitOverflowScrolling: 'touch',
	},
	docs: {
		color: color.base,
		fontSize: fontSize.text,
	},
});

export function ReactComponentRenderer({
	name,
	heading,
	pathLine,
	description,
	docs,
	examples,
	tabButtons,
	tabBody,
}) {
	return (
		<div id={`${name}-container`}>
			<header>
				{heading}
				{pathLine && <Pathline>{pathLine}</Pathline>}
			</header>
			{(description || docs) && (
				<div>
					{description}
					{docs}
				</div>
			)}
			{tabButtons && (
				<React.Fragment>
					<div>{tabButtons}</div>
					<div>{tabBody}</div>
				</React.Fragment>
			)}
			{examples}
		</div>
	);
}

ReactComponentRenderer.propTypes = {
	name: PropTypes.string.isRequired,
	heading: PropTypes.node.isRequired,
	filepath: PropTypes.string,
	pathLine: PropTypes.string,
	tabButtons: PropTypes.node,
	tabBody: PropTypes.node,
	description: PropTypes.node,
	docs: PropTypes.node,
	examples: PropTypes.node,
	isolated: PropTypes.bool,
};

export default ReactComponentRenderer;
