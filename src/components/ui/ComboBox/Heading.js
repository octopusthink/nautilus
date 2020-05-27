import { css } from '@emotion/core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { toUnits } from '../../../styles';
import { useTheme } from '../../../themes';
import ListItem from '../List/Item';

export const ComponentClassName = 'Nautilus-ComboBoxHeading';

export const Heading = (props) => {
  const { children, className, unstyled, ...otherProps } = props;

  const theme = useTheme();

  return (
    <ListItem
      className={classnames(ComponentClassName, className)}
      css={
        unstyled
          ? undefined
          : css`
              background: ${theme.colors.text.default};
              color: ${theme.colors.text.inverse};
              line-height: 2.4rem;
              padding: ${toUnits(theme.spacing.padding.medium)};
              width: 100%;
            `
      }
      unstyled
      {...otherProps}
    >
      {children}
    </ListItem>
  );
};

Heading.defaultProps = {
  children: undefined,
  className: undefined,
  unstyled: false,
};

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  /* @ignore Don't output any CSS styles. */
  unstyled: PropTypes.bool,
};

export const { defaultProps, propTypes } = Heading;

export default Heading;
