import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const ClearIndicator = ({ innerProps }) => {
  return (
    <Button
      {...innerProps}
      minimal
      iconOnly="x"
      noMargin
      css={css`
        display: inline;
        padding: 0;

        svg {
          height: 1.6rem;
          width: 1.6rem;
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
