import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';

import { headingClassNameForLevel } from 'components/ui/Heading';
import { heading, body, interfaceUI, toUnits } from 'styles';
import { useTheme } from 'themes';

export const Card = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        background: white;
        border: 1px solid ${theme.colors.neutral.grey0};
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
        padding: ${toUnits(theme.spacing.padding.large)};
        margin-bottom: ${toUnits(theme.spacing.margin.medium)};

        .${headingClassNameForLevel(1)},
          .${headingClassNameForLevel(2)},
          .${headingClassNameForLevel(3)},
          .${headingClassNameForLevel(4)},
          .${headingClassNameForLevel(5)},
          .${headingClassNameForLevel(6)} {
          ${heading.small(theme)};
          color: ${theme.colors.neutral.grey800};
        }

        /* TODO: Apply the small paragraph styling in a less brute-forcey sort of way.*/
        p {
          ${body.small(theme)};
        }

        /* TODO: Create a small prop on the button, and pull that styling in here. */
        button {
          ${interfaceUI.small(theme)};
          padding: ${toUnits(theme.spacing.padding.small)}
            ${toUnits(theme.spacing.padding.medium)};
        }
      `}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  /** @ignore */
  children: PropTypes.node,
};

export const { defaultProps, propTypes } = Card;

export default Card;
