import { css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';

import theme from 'styleguide/theme';
import { interfaceUI, toUnits } from 'styles';

export function TabButtonRenderer({ name, className, onClick, active, children }) {
	return (
		<button css={css`
			background: ${theme.colors.neutral.black};
			border: none;
			color: ${theme.colors.text.inverseLight};
			padding: ${toUnits(theme.spacing.padding.medium)};
			${css(interfaceUI.small(theme))};

			&::before {
				display: inline-block;
				content: '↓';
				margin-right: ${toUnits(theme.spacing.padding.extraSmall)};
			}

			${active &&
			 css`
				color: ${theme.colors.text.inverseDark} !important;
				border-bottom: 2px solid ${theme.colors.text.inverseDark};

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
