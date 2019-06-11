import { css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import theme from 'styleguide/theme';
import { interfaceUI } from 'styles';


export function TabButtonRenderer({ name, className, onClick, active, children }) {
	return (
		<button css={css`
			background: none;
			border: none;
			color: ${theme.colors.neutral.white};
			padding: 10px;
			${css(interfaceUI.small(theme))};

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
	name: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	children: PropTypes.node,
};

export default TabButtonRenderer;
