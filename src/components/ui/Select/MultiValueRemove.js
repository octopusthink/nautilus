import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const MultiValueRemove = ({ data, innerProps }) => {
  return (
    <Button
      {...innerProps}
      minimal
      iconOnly="x"
      noMargin
      css={css`
        padding: 0;
        color: white;

        svg {
          height: 1.6rem;
          width: 1.6rem;
        }
      `}
    >
      Remove {data?.label || ''} tag
    </Button>
  );
};

MultiValueRemove.defaultProps = {
  children: undefined,
};

MultiValueRemove.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  /** @ignore */
  // eslint-disable-next-line react/forbid-prop-types
  innerProps: PropTypes.object.isRequired,
};

MultiValueRemove.displayName = 'MultiValueRemove';

export default MultiValueRemove;
