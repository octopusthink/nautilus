import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import { interfaceUI, toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import List from '../List';

const Menu = (props) => {
  const { children, innerProps } = props;
  const theme = useTheme();

  return (
    <List
      css={css`
        ${interfaceUI.medium(theme)};
        background: ${theme.colors.buttons.neutral};
        border: ${toUnits(theme.spacing.padding.xxSmall)} solid ${theme.colors.text.default};
        color: ${theme.colors.text.default};
        left: -${toUnits(theme.spacing.padding.xxSmall)};
        list-style-type: none;
        margin: 0;
        max-height: 60vh;
        overflow-y: scroll;
        overflow: hidden;
        position: absolute;
        padding: 0;
        top: ${toUnits(theme.spacing.padding.xxLarge + theme.spacing.padding.xSmall)};
        transition: height 200ms;
        width: calc(100% + ${toUnits(theme.spacing.padding.xSmall)});
        z-index: 1000;
      `}
      {...innerProps}
    >
      {children}
    </List>
  );
};

Menu.defaultProps = {
  children: undefined,
  innerProps: {},
};

Menu.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  innerProps: PropTypes.object,
};

export default Menu;
