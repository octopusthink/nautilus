import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ListItem from '../List/Item';

export const ComponentClassName = 'Nautilus-ComboBoxOption';

export const Option = (props) => {
  const { children, className, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <ListItem
      className={classnames(ComponentClassName, className)}
      css={
        unstyled
          ? undefined
          : css`
              //border-bottom: 1px solid ${theme.colors.neutral.grey200};
              cursor: pointer;
              line-height: 2.4rem;
              padding: ${toUnits(theme.spacing.padding.medium)};
              width: 100%;

              &:hover {
                background: ${theme.colors.neutral.grey200};
              }
            `
      }
      unstyled
      {...otherProps}
    >
      {children}
    </ListItem>
  );
};

Option.defaultProps = {
  children: undefined,
  className: undefined,
  unstyled: false,
};

Option.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Option;

export default Option;
