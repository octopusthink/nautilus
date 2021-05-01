import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';

const IndicatorsContainer = (props) => {
  const { selectProps } = props;

  return (
    <Icon
      css={css`
        float: right;
        margin: -2.6rem 0 0;
      `}
      name={selectProps.menuIsOpen ? 'chevron-up' : 'chevron-down'}
    />
  );
};

IndicatorsContainer.defaultProps = {
  selectProps: undefined,
};

IndicatorsContainer.propTypes = {
  /* @ignore Don't output any CSS styles. */
  // eslint-disable-next-line react/forbid-prop-types
  selectProps: PropTypes.object,
};

export default IndicatorsContainer;
