import { css } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import cx from 'clsx';

import theme from 'styleguide/theme';
import { interfaceSmall } from 'themes/mixins';

export const styles = ({ space, color, fontFamily, fontSize, buttonTextTransform }) => ({
	button: {
		padding: [[space[1], 0]],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.light,
		background: 'transparent',
		textTransform: buttonTextTransform,
		transition: 'color 750ms ease-out',
		border: 'none',
		cursor: 'pointer',
		'&:hover, &:focus': {
			isolate: false,
			outline: 0,
			color: color.linkHover,
			transition: 'color 150ms ease-in',
		},
		'&:focus:not($isActive)': {
			isolate: false,
			outline: [[1, 'dotted', color.linkHover]],
		},
		'& + &': {
			isolate: false,
			marginLeft: space[1],
		},
	},
	isActive: {
		borderBottom: [[2, color.linkHover, 'solid']],
	},
});

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
