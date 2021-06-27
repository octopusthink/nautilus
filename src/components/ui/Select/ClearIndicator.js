import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { useTheme } from '../../../themes';

const ClearIndicator = ({ innerProps }) => {
  const theme = useTheme();

  return (
    <Button
      {...innerProps}
      minimal
      iconOnly="x"
      noMargin
      css={css`
        color: ${theme.colors.neutral.grey800};
        order: 2;
        padding: 0;

        svg {
          height: 2rem;
          width: 2rem;
        }
      `}
    >
      Remove selection
    </Button>
  );
};

ClearIndicator.defaultProps = {};

ClearIndicator.propTypes = {
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  innerProps: PropTypes.object.isRequired,
};

ClearIndicator.displayName = 'ClearIndicator';

export default ClearIndicator;
