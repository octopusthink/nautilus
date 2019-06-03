import { css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import theme from 'styleguide/theme';
import { interfaceSmall } from 'themes/mixins';


export function TabButtonRenderer({ classes, name, className, onClick, active, children }) {
	return (
		<button css={css`
			background: none;
			border: none;
			color: ${theme.colors.neutral.white};
			padding: 10px;
			${css(interfaceSmall(theme))};

			&::before {
				display: inline-block;
				content: '↓';
				margin-right: ${theme.spacing.padding.xxs};
			}

			${active &&
			 css`
				color: hotpink !important;
				border-bottom: 2px solid hotpink;

				&::before {
					content: '↑';
				}
			`}
		`}
		type="button" name={name} onClick={onClick}>
			 {children}
		</button>
	);
}

TabButtonRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	children: PropTypes.node,
};

export default TabButtonRenderer;
